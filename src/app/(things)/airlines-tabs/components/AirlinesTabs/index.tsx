'use client'

import { AnimatePresence, motion, Variants } from "motion/react"
import {useCallback, useState } from "react"
import { DestinationPicker } from "./DestinationPicker"
import { Field } from "./Field"
import useMeasure from 'react-use-measure'
import { cn } from "@/common/helpers"

const TABS = ['tickets', 'check_in', 'bookings'] as const

type Tab = typeof TABS[number]

const TAB_TITLES: Record<Tab, string> = {
  tickets: 'Purchasing tickets',
  check_in: 'Online check-in',
  bookings: 'Manage your bookings',
}

enum Direction {
  Left = -1,
  Right = 1
}

const variants: Variants = {
  initial: (direction: number) => ({opacity: 1, x: direction * 30 + '%'}),
  animate: {opacity: 1, x: 0},
  exit: (direction: number) => ({opacity: 0, x: -direction * 30 + '%'})
}

export const AirlinesTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>('tickets')
  const [direction, setDirection] = useState<Direction>(Direction.Right)

  const selectTab = useCallback((tab: Tab) => {
    const tabIndex = TABS.indexOf(tab)
    const activeTabIndex = TABS.indexOf(activeTab)

    setDirection(tabIndex < activeTabIndex ? Direction.Left : Direction.Right)

    setActiveTab(tab)
  }, [activeTab])

  const [ref, bounds] = useMeasure()

  return (
    <div className="flex flex-col gap-y-3">
      <motion.div layout className="p-2 px-3 bg-white rounded-xl gap-x-4 flex items-center w-fit">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => selectTab(tab)}
            disabled={tab === activeTab}
            className={cn('rounded-md px-3 py-2 font-medium bg-white text-black cursor-pointer transition-colors', {
              'bg-orange-50 text-orange-500': tab === activeTab
            })}
          >
            {TAB_TITLES[tab]}
          </button>
        ))}
      </motion.div>
      <motion.div animate={{height: bounds.height}} transition={{type: 'spring', bounce: 0.1, duration: 0.2}} className="w-220 relative bg-white rounded-2xl overflow-hidden">
        <div ref={ref} className="p-6">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={activeTab}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              transition={{type: 'spring', bounce: 0.2, duration: 0.5}}
            >
              {activeTab === 'tickets' && (
                <div className="flex flex-col gap-y-4">
                  <div className="grid grid-cols-2 w-full gap-x-4">
                    <DestinationPicker />

                    <div className="grid grid-cols-3 gap-x-2 items-end">
                      <Field label="Depart">
                        17.05.2025
                      </Field>
                      <Field label="Return">
                        24.05.2025
                      </Field>
                      <Field>
                        1 passenger
                      </Field>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-x-4 text-gray-500">
                      <span className="cursor-pointer">Enter promo code</span>
                      <span className="cursor-pointer">Use voucher</span>
                    </div>
                    <button className="rounded-lg font-medium bg-black text-white px-4 cursor-pointer py-2">Submit</button>
                  </div>
                </div>
              )}

              {activeTab === 'check_in' && (
                <div className="grid gap-x-4 grid-cols-[0.75fr_1fr_auto] items-end">
                  <Field label="Booking code">
                    XG6FD
                  </Field>
                  <Field label="Last name in Latin letters">
                    JOHN DOE
                  </Field>
                  <button className="rounded-lg bg-black py-2 px-6 border border-black cursor-pointer text-white">
                    Check in
                  </button>
                </div>
              )}

              {activeTab === 'bookings' && (
                <div className="grid gap-x-4 grid-cols-[0.75fr_1fr_auto] items-end">
                  <Field label="Booking code">
                    77777
                  </Field>
                  <Field label="Last name in Latin letters">
                    Peter Parker
                  </Field>
                  <button className="rounded-lg bg-black py-2 px-6 border border-black cursor-pointer text-white">
                    Search
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
