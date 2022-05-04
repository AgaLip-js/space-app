import React, { Fragment, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import events from './events'
import { Calendar, Views, DateLocalizer, momentLocalizer  } from 'react-big-calendar'
import Card from './Card'
import DemoLink from './DemoLink'
import moment from 'moment'
// Storybook cannot alias this, so you would use 'react-big-calendar/lib/addons/dragAndDrop'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Storybook cannot alias this, so you would use 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'

// @ts-ignore
const DragAndDropCalendar = withDragAndDrop(Calendar)

const adjEvents = events.map((it, ind) => ({
  ...it,
  isDraggable: ind % 2 === 0,
}))

const formatName = (name: string, count: number) => `${name} ID ${count}`


const localizer = momentLocalizer(moment)

export default function DnDOutsideResource() {
  const [myEvents, setMyEvents] = useState(adjEvents)
  const [draggedEvent, setDraggedEvent] = useState(null);
  const [displayDragItemInCell, setDisplayDragItemInCell] = useState(true)
  const [counters, setCounters] = useState({ item1: 0, item2: 0 })

  const eventPropGetter = useCallback(
    (event) => ({
      ...(event.isDraggable
        ? { className: 'isDraggable' }
        : { className: 'nonDraggable' }),
    }),
    []
  )
  //,
  const handleDragStart = useCallback((event) => setDraggedEvent(event), [])

  const dragFromOutsideItem = useCallback(() => draggedEvent, [draggedEvent])

  const customOnDragOver = useCallback(
    (dragEvent) => {
      // check for undroppable is specific to this example
      // and not part of API. This just demonstrates that
      // onDragOver can optionally be passed to conditionally
      // allow draggable items to be dropped on cal, based on
      // whether event.preventDefault is called
      if (draggedEvent !== 'undroppable') {
        console.log('preventDefault')
        dragEvent.preventDefault()
      }
    },
    [draggedEvent]
  )

  const handleDisplayDragItemInCell = useCallback(
    () => setDisplayDragItemInCell((prev) => !prev),
    []
  )

  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true
      }

      setMyEvents((prev) : any => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end, allDay }]
      })
    },
    [setMyEvents]
  )

  const newEvent = useCallback(
    (event) => {
      setMyEvents((prev) => {
        const idList = prev.map((item) => item.id)
        const newId = Math.max(...idList) + 1
        return [...prev, { ...event, id: newId }]
      })
    },
    [setMyEvents]
  )

  const onDropFromOutside = useCallback(
    ({ start, end, allDay: isAllDay }) => {
      if (draggedEvent === 'undroppable') {
        setDraggedEvent(null);
        return
      }

      // @ts-ignore
      const { name } = draggedEvent || {};
      const event = {
        // @ts-ignore
        title: formatName(name, counters[name]),
        start,
        end,
        isAllDay,
      }
      setDraggedEvent(null)
      setCounters((prev) => {
        // @ts-ignore
        const { [name]: count } = prev
        return {
          ...prev,
          [name]: count + 1,
        }
      })
      newEvent(event)
    },
    [draggedEvent, counters, setDraggedEvent, setCounters, newEvent]
  )

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setMyEvents((prev): any => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {}
        const filtered = prev.filter((ev) => ev.id !== event.id)
        return [...filtered, { ...existing, start, end }]
      })
    },
    [setMyEvents]
  )

  const defaultDate = useMemo(() => new Date(2015, 3, 12), [])

  return (
    <Fragment>
      <DemoLink fileName="dndOutsideSource">
          {/* @ts-ignore */}
        <Card className="dndOutsideSourceExample">
          <div className="inner">
            <h4>Outside Drag Sources</h4>
            <p>
              Lighter colored events, in the Calendar, have an `isDraggable` key
              of `false`.
            </p>
            {Object.entries(counters).map(([name, count]) => (
              <div
                draggable="true"
                key={name}
                onDragStart={() =>
                  handleDragStart({ title: formatName(name, count), name })
                }
              >
                {formatName(name, count)}
              </div>
            ))}
            <div
              draggable="true"
              onDragStart={() => handleDragStart('undroppable')}
            >
              Draggable but not for calendar.
            </div>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={displayDragItemInCell}
                onChange={handleDisplayDragItemInCell}
              />
              Display dragged item in cell while dragging over
            </label>
          </div>
        </Card>
      </DemoLink>
      <div className="height600">
      {/* @ts-ignore */}
        <DragAndDropCalendar
          defaultDate={defaultDate}
          defaultView={Views.MONTH}
          dragFromOutsideItem={
            displayDragItemInCell ? dragFromOutsideItem : null
          }
          draggableAccessor="isDraggable"
          eventPropGetter={eventPropGetter}
          events={myEvents}
          localizer={localizer}
          onDropFromOutside={onDropFromOutside}
          onDragOver={customOnDragOver}
          onEventDrop={moveEvent}
          onEventResize={resizeEvent}
          onSelectSlot={newEvent}
          resizable
          selectable
        />
      </div>
    </Fragment>
  )
}
DnDOutsideResource.propTypes = {
  localizer: PropTypes.instanceOf(DateLocalizer),
}