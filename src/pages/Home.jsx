import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import {motion} from 'framer-motion'

import React from 'react'

function home() {
  return (
    <motion.div>
        <Veggie/>
        <Popular/>
    </motion.div>
  )
}

export default home