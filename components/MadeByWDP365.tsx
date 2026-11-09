"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import styles from "./MadeByWDP365.module.css";

/**
 * WDP365 Makers Mark v1.0.0
 * A self-contained interactive maker's signature for client website footers.
 * No animation, tracking, icon, or 3D package dependency.
 */
export type MadeByWDP365Props = {
  /** Optional anonymous, non-sensitive project code: e.g. alpine-demo-01. */
  projectCode?: string;
  /** Optional CSS color values. In most cases set only accent and accentAlt. */
  accent?: string;
  accentAlt?: string;
  /** Dark footer vs. light footer. */
  theme?: "dark" | "light";
  /** Two responsive size presets. */
  size?: "standard" | "compact";
  /** Disable all decorative animation explicitly. */
  motion?: "on" | "off";
  /** Default verified public destination; override for an approved campaign page. */
  destination?: string;
  className?: string;
};

const DEFAULT_DESTINATION = "https://www.webdesignpros365.com/";

/**
 * Keep the external link usable even if a project code is omitted or malformed.
 * Attribution codes are public URLs, NOT credentials or personal identifiers.
 */
export function makeWDP365ReferralUrl(
  destination: string = DEFAULT_DESTINATION,
  projectCode?: string,
): string {
  const normalizedCode = projectCode?.trim().toLowerCase();
  const safeCode = normalizedCode && /^[a-z0-9][a-z0-9_-]{0,63}$/.test(normalizedCode)
    ? normalizedCode
    : undefin¶»§q«^