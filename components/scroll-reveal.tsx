"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    direction?: "up" | "down" | "left" | "right" | "none"
    delay?: number
    duration?: number
    fullWidth?: boolean
}

export function ScrollReveal({
    children,
    className = "",
    direction = "up",
    delay = 0,
    duration = 0.5,
    fullWidth = false,
}: ScrollRevealProps) {
    const getVariants = () => {
        const distance = 50

        switch (direction) {
            case "up":
                return {
                    hidden: { opacity: 0, y: distance },
                    visible: { opacity: 1, y: 0 },
                }
            case "down":
                return {
                    hidden: { opacity: 0, y: -distance },
                    visible: { opacity: 1, y: 0 },
                }
            case "left":
                return {
                    hidden: { opacity: 0, x: distance },
                    visible: { opacity: 1, x: 0 },
                }
            case "right":
                return {
                    hidden: { opacity: 0, x: -distance },
                    visible: { opacity: 1, x: 0 },
                }
            case "none":
            default:
                return {
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }
        }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={getVariants()}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            style={fullWidth ? { width: "100%" } : undefined}
        >
            {children}
        </motion.div>
    )
}
