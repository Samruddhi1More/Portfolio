"use client"

import { motion } from "framer-motion"
// import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center md:text-left"
          >
            © {new Date().getFullYear()} Samruddhi More. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center mt-4 md:mt-0"
          >
            <span className="text-muted-foreground">Made with ❤️ by Samruddhi More</span>
            {/* <Heart className="w-4 h-4 mx-1 text-primary" /> */}
            {/* <span className="text-muted-foreground"> by Samruddhi More</span> */}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

