import React from "react"
import Loadable from "@loadable/component"

const LoadedBrainMarkModule = Loadable(() => import("../modules/BrainModule"))

export default function BrainPage() {
  return (
    <>
      <div>
        <LoadedBrainMarkModule />
      </div>
    </>
  )
}
