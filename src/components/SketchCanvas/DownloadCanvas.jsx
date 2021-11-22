import React from 'react'
import { useCanvas } from './CanvasContext'

const DownloadCanvas = () =>{
      const { downloadCanvas } = useCanvas()

    return (
        <button onClick={downloadCanvas}>Clear</button>
    )
}

export default DownloadCanvas
