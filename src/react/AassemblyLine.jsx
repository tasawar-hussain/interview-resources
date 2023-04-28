import React, { useState, useMemo, useEffect, useRef } from 'react'

const deepCopy = (data) => {
  return JSON.parse(JSON.stringify(Array.from(data)))
}

const AssemblyLine = ({ stages }) => {
  const [stagesData, setStagesData] = useState({})
  const [value, setValue] = useState('')

  useEffect(() => {
    const initial = {}
    stages.forEach((_, i) => (initial[i] = new Array()))
    setStagesData(initial)
  }, [stages])

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const data = useMemo(() => {
    const lines = Object.values(stagesData).map((d) => [...d])
    return lines
  }, [stagesData])

  const onAdd = (event) => {
    if (event.key === 'Enter' && !!value.trim()) {
      event.preventDefault()

      const val = value
      setValue('')

      setStagesData((prev) => {
        const idx = prev[0].indexOf(val)
        let found = false
        for (let i = 0; i < stages.length; i++) {
          if (prev[i].indexOf(val) !== -1) {
            found = true
            break
          }
        }

        if (found) return prev

        const newLine = deepCopy(prev[0])
        newLine.unshift(val)
        return { ...prev, [0]: newLine }
      })
    }
  }

  const _changeStep = (item, currentStep, nextStep) => {
    setStagesData((currState) => {
      const idx = currState[currentStep].indexOf(item)
      if (idx !== -1) {
        const newData = { ...currState }
        const currLine = currState[currentStep].filter((v) => v !== item)
        newData[currentStep] = currLine

        if (nextStep > -1 && nextStep < stages.length) {
          const nextLine = deepCopy(currState[nextStep])
          if (nextStep > currentStep) {
            nextLine.unshift(item)
          } else {
            nextLine.push(item)
          }

          newData[nextStep] = nextLine
        }
        return newData
      }
      return currState
    })
  }

  const handleLeftClick = (e, item, step) => {
    e.preventDefault()
    if (e.type === 'click' || e.button === 0) {
      _changeStep(item, step, step + 1)
    }
  }

  const handleRightClick = (e, item, step) => {
    e.preventDefault()
    _changeStep(item, step, step - 1)
  }

  return (
    <>
      <label>Add an item:</label>
      <input
        value={value}
        onChange={handleChange}
        className='assembly-add-item'
        onKeyPress={onAdd}
      />
      <hr />
      <div className='s-wrapper'>
        {stages.map((stage, idx) => {
          return (
            <div>
              <b>{stage}</b>
              <div className='assembly-stage' key={stage}>
                {data[idx]
                  ? data[idx].map((item) => (
                      <button
                        className='assembly-item'
                        onClick={(e) => handleLeftClick(e, item, idx)}
                        onContextMenu={(e) => handleRightClick(e, item, idx)}
                      >
                        {item}
                      </button>
                    ))
                  : null}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default AssemblyLine
