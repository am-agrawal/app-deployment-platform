import PropTypes from "prop-types";
import {
  SiNextdotjs,
  SiReact,
  SiVite,
  SiSvelte,
  SiNuxt,
  SiAstro,
} from "react-icons/si";
import { LuGitBranch, LuEye, LuShieldCheck, LuGlobe } from "react-icons/lu";

export { LuMenu as MenuIcon, LuX as CloseIcon } from "react-icons/lu";

export const FRAMEWORK_LOGOS = {
  next: SiNextdotjs,
  react: SiReact,
  vite: SiVite,
  svelte: SiSvelte,
  nuxt: SiNuxt,
  astro: SiAstro,
};

export const FEATURE_ICONS = {
  git: LuGitBranch,
  preview: LuEye,
  https: LuShieldCheck,
  cdn: LuGlobe,
};

export function BrandLogo({ className = "", size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2 22 20H2L12 2Z" fill="currentColor" />
    </svg>
  );
}

BrandLogo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};
