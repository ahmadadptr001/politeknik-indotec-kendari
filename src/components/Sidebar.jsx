// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";

/**
 * Sidebar dengan entrance "bongkar-pasang" (staggered transform).
 * Props:
 * - open (bool)
 * - setOpen(fn)
 * - menuItems (array)
 */
export default function Sidebar({ open, setOpen, menuItems }) {
  const shouldReduce = useReducedMotion();

  // container variants: slide aside + stagger children
  const containerVariants = {
    hidden: { x: "-100%" },
    visible: shouldReduce
      ? { x: 0, transition: { type: "tween", duration: 0.24 } }
      : {
          x: 0,
          transition: {
            type: "tween",
            duration: 0.28,
            when: "beforeChildren",
            staggerChildren: 0.04,
            staggerDirection: 1,
          },
        },
    exit: shouldReduce
      ? { x: "-100%", transition: { duration: 0.18 } }
      : {
          x: "-100%",
          transition: {
            type: "tween",
            duration: 0.22,
            when: "afterChildren",
            staggerChildren: 0.02,
            staggerDirection: -1,
          },
        },
  };

  // each item enters with transform only (no opacity change)
  const itemVariants = {
    hidden: { x: -18, scaleX: 0.94 },
    visible: {
      x: 0,
      scaleX: 1,
      transition: { type: "spring", stiffness: 300, damping: 26 },
    },
    exit: { x: -12, scaleX: 0.96, transition: { duration: 0.12 } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="fixed top-0 left-0 h-full w-80 bg-base-100 shadow-2xl z-50 flex flex-col overflow-auto"
          aria-hidden={!open}
        >
          {/* header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="logo"
                className="w-10 h-10 rounded-full object-cover shadow-sm"
              />
              <div>
                <div className="text-sm font-semibold tracking-wide">
                  Politeknik Indotec
                </div>
                <div className="text-[11px] text-muted-foreground">Kendari</div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
              className="btn btn-ghost btn-sm"
            >
              ✕
            </button>
          </div>

          {/* content list: each top-level li is motion so they stagger on entrance */}
          <nav className="px-2 py-3">
            <ul className="space-y-0.5">
              {menuItems.map((item) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  className="list-none"
                >
                  <SidebarItem item={item} setOpen={setOpen} level={0} />
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

/* ---------- recursive item ---------- */
function SidebarItem({ item, level = 0, setOpen }) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;
  const [open, setLocalOpen] = useState(false);

  // subtle indent per level, small typography
  const indent = Math.min(level * 10, 36);
  const baseText = "text-[0.88rem] tracking-wide font-medium";

  return (
    <div>
      <div
        className={`flex items-center justify-between w-full rounded-md px-3 py-2 cursor-pointer transition-colors duration-150
                    ${hasChildren ? "hover:bg-base-200" : "hover:bg-base-200"}`}
        style={{ paddingLeft: `${12 + indent}px` }}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={() => setLocalOpen((s) => !s)}
            aria-expanded={open}
            className={`flex-1 text-left ${baseText}`}
          >
            <span className="leading-tight">{item.name}</span>
          </button>
        ) : (
          <NavLink
            to={item.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `block flex-1 ${baseText} leading-tight ${
                isActive ? "text-primary" : "text-base-content"
              }`
            }
          >
            {item.name}
          </NavLink>
        )}

        {hasChildren ? (
          <button
            onClick={() => setLocalOpen((s) => !s)}
            aria-label={open ? "Tutup submenu" : "Buka submenu"}
            className="ml-2 p-1 rounded hover:bg-base-200 transition-transform"
          >
            <motion.svg
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ type: "tween", duration: 0.18 }}
              className="w-4 h-4 text-muted-foreground"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
            </motion.svg>
          </button>
        ) : null}
      </div>

      {/* children: animate height for expand/collapse but when showing, each child uses transform entrance */}
      <AnimatePresence initial={false}>
        {hasChildren && open && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {item.children.map((child) => (
              <motion.li
                key={child.name}
                initial={{ x: -12, scaleX: 0.96 }}
                animate={{ x: 0, scaleX: 1 }}
                exit={{ x: -8, scaleX: 0.98 }}
                transition={{ type: "tween", duration: 0.16 }}
              >
                <SidebarItem item={child} level={level + 1} setOpen={setOpen} />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
