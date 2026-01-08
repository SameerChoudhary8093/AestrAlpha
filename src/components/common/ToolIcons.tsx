import React from 'react';

// Props for sizing and color
interface IconProps {
    className?: string;
    style?: React.CSSProperties;
}

export const SalesforceIcon = ({ className, style }: IconProps) => (
    // Salesforce blue cloud
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#00A1E0', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1 16.3c-.1 0-.2 0-.3.1-.9.8-2 .8-3 .1-.4-.3-.7-.7-.9-1.2.6-1.8.1-3.6-1.3-4.9-1.3-1.2-3.3-1.4-4.8-.5-.8-2.6-3.8-4-6.3-3-2.6 1-3.9 4.1-2.9 6.7-.8 1-1 2.3-.5 3.5.5 1.1 1.6 1.9 2.8 2.1h17.2c1.6-.2 2.8-1.5 2.9-3.1.1-1.6-1-3-2.5-3.4-.6-2-2.7-3.1-4.7-2.5-.3.1-.6.2-.8.3.1.9-.3 1.8-1.1 2.4-.6.3-1.3.4-1.9.1z" />
    </svg>
);

export const ApexIcon = ({ className, style }: IconProps) => (
    // Generic Code Icon / Brackets, often used for Apex if no logo exists
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={{ color: '#F0F0F0', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

export const LwcIcon = ({ className, style }: IconProps) => (
    // Lightning Bolt for LWC
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#F3C500', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

export const VsCodeIcon = ({ className, style }: IconProps) => (
    // Visual Studio Code
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#007ACC', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M23.15 2.587l-2.13-1.603a1.914 1.914 0 0 0-2.31.258L12.592 6.556 7.68 3.967a1.439 1.439 0 0 0-1.83.473L.585 13.961a1.442 1.442 0 0 0 .548 2.05L7.432 19.5a1.437 1.437 0 0 0 1.97-.618l2.935-5.961 6.53 5.41a1.917 1.917 0 0 0 2.433-.146l1.9-1.465a1.597 1.597 0 0 0 .5-1.25V3.81a1.6 1.6 0 0 0-.55-1.223zM5.31 16.55L2.9 12.63l4.63-8.32 3.12 1.64-5.34 10.6zm13.78-7.73l-4.14-3.41 4.14-4.82v8.23zm-.95 1.12l-5.63-4.64-3.79 3.15 4.3 3.56 5.12-2.07zm-5.12 3.19l-4.3 3.56 3.79 3.15 5.63-4.66-5.12-2.05zm6.07 1.13v8.18l-4.12-4.8 4.12-3.38z" />
        {/* Simplified path or full path. Using a cleaner simple version if mostly needed small */}
        <path d="M17.5 12L7 18V6l10.5 6z" fill="#007ACC" style={{ display: 'none' }} /> {/* Fallback simplified */}
    </svg>
);

export const GitIcon = ({ className, style }: IconProps) => (
    // Git - Orange/Red branching
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#F05032', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5 11l-9-9C14.3 1.8 14 1.8 13.8 2l-1.6 1.6 4.3 4.3c.4-.1.9 0 1.2.3.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.3-.3-.4-.7-.4-1.1l-4.5-4.5-6.5 6.5c-.2.2-.2.5 0 .7l9 9c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7zM9.5 13.6c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2s1.6-.6 2.2 0c.6.6.6 1.6 0 2.2z" />
    </svg>
);

export const GitHubIcon = ({ className, style }: IconProps) => (
    // GitHub - Octocat
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#ffffff', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.764-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
    </svg>
)

export const PostmanIcon = ({ className, style }: IconProps) => (
    // Postman - Orange flying man
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#FF6C37', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#FF6C37" fillOpacity="0" /> {/* Circle BG */}
        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.855.855 0 0 0-.528-1.517c-.89-.136-1.77.108-2.618.73-1.042.766-1.785 1.83-2.148 3.076-.411 1.41-.219 2.822.449 4.095.845 1.608 2.378 2.651 4.183 2.812.215.02.43.029.645.026 2.05-.027 3.843-1.037 4.965-2.795.14-.22.08-.51-.136-.676l-.608-.466a.547.547 0 0 0-.756.096 4.706 4.706 0 0 1-3.953 2.14c-2.31 0-4.248-1.705-4.604-3.992a4.705 4.705 0 0 1 1.948-4.704c.148-.093.284-.132.316-.076z" />
    </svg>
);

export const JiraIcon = ({ className, style }: IconProps) => (
    // Jira - Blue tilted squares
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#0052CC', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.128v2.057a5.215 5.215 0 0 0 5.215 5.215V1.006A1.005 1.005 0 0 0 23.013 0z" />
    </svg>
);

export const AgentforceIcon = ({ className, style }: IconProps) => (
    // Sparkle / Robot AI Icon - Using a generic sparkle
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#EAF0BD', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
);

export const KubernetesIcon = ({ className, style }: IconProps) => (
    // Kubernetes - Blue Wheel
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#326CE5', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.96 1.41a1.29 1.29 0 0 0-.64.18L4.69 5.3a1.27 1.27 0 0 0-.66 1.12v7.71a1.27 1.27 0 0 0 .66 1.12l6.63 3.71a1.29 1.29 0 0 0 1.28 0l6.59-3.71a1.27 1.27 0 0 0 .65-1.12V6.43a1.27 1.27 0 0 0-.65-1.12L12.6 1.6a1.29 1.29 0 0 0-.64-.19zm.06 2.5l5.08 2.87-1.89 1.05-3.19-1.78v-2.14zm-1.34.02v2.12l-3.14 1.76-1.89-1.07 5.03-2.81zm-4.32 4.49l1.87 1.06-.02 3.61-3.11 1.74V9.45l1.26-.71zm11.23 0l1.24.7v5.37l-3.08-1.72v-3.64l1.84-1.03zm-5.61 3.16l3.07 1.72-1.92 1.07-5.07-2.85 1.93-1.07 1.99 1.13zm-1.21 2.45l5.04 2.83-1.85 1.04-3.19-1.79v-2.08zm-1.34.01v2.09l-3.15 1.76-1.87-1.05 5.02-2.8z" />
    </svg>
);

export const DockerIcon = ({ className, style }: IconProps) => (
    // Docker - Blue Whale
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#2496ED', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.89c0 .1.09.19.19.19zm-2.95-5.43h2.12a.19.19 0 0 0 .19-.19V3.57a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.89c0 .1.08.19.19.19zm0 2.72h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.89c0 .1.08.19.19.19zm-2.93 0h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.19.19v1.89c0 .1.08.19.19.19zm-2.96 0h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19H5.14a.19.19 0 0 0-.19.19v1.89c0 .1.08.19.19.19zm5.89 2.71h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.89c0 .1.08.19.19.19zm-2.93 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.89c0 .1.08.19.19.19zm-2.96 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.89c0 .1.08.19.19.19zm-2.92 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.89c0 .1.08.19.19.19m23.63.88c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09-.25-1.7-1.65-2.53-1.72-2.57l-.34-.2-.23.33c-.28.44-.49.92-.61 1.43-.23.97-.09 1.88.4 2.66-.59.33-1.55.41-1.74.42H.75a.75.75 0 0 0-.75.75 11.38 11.38 0 0 0 .69 4.06c.55 1.43 1.36 2.48 2.41 3.12 1.18.72 3.1 1.14 5.28 1.14.98 0 1.96-.09 2.93-.27a12.25 12.25 0 0 0 3.82-1.39c.98-.57 1.86-1.29 2.61-2.14a11.3 11.3 0 0 0 2.55-4.4h.22c1.37 0 2.22-.55 2.68-1.01.31-.29.55-.65.71-1.05l.1-.28z" />
    </svg>
);

export const PythonIcon = ({ className, style }: IconProps) => (
    // Python - Blue/Yellow Snakes (Simplified single color)
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#3776AB', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-1.23.05-1.08.16-.93.26-.8.36-.67.44-.56.5-.46.54-.37.56-.29.58-.2.58-.13L10.48 0h1.27l1.3.06.91.08.29.04zM12 21.43l1.61.12 1.32-.04 1.2-.16 1.05-.27.88-.37.7-.45.52-.51.36-.53.21-.52.09-.48.01-.39V15.5l.06-.61.16-.54.24-.46.3-.37.35-.32.38-.26.4-.2.41-.15.41-.1.4-.06.37-.02h5.13l.68-.05.59-.14.5-.22.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.92h2.03l.21.03.28.07.32.12.35.18.36.27.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.02-.16.02h-8.21v.82h4.84l.01 2.76.02 1.23-.05 1.08-.16.94-.26.8-.36.66-.44.56-.5.47-.54.36-.56.29-.58.21-.58.13-.59.08-1.26.06-1.29-.04-.91-.09-.29-.04z" />
    </svg>
);

export const TerraformIcon = ({ className, style }: IconProps) => (
    // Terraform - Purple
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#7B42BC', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M8.28 4.26l7.43 3.78v7.55L8.28 11.8V4.26zm8.25 3.78v7.55l7.44-3.78V4.26l-7.44 3.78zM.04.05v7.55l7.43 3.78V3.83L.04.05zm8.25 20.14l7.43 3.78V16.42l-7.43-3.78v7.55z" />
    </svg>
);

export const AwsIcon = ({ className, style }: IconProps) => (
    // AWS - Orange
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#FF9900', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M18.15 14.8c-.37-.5-1.04-.54-1.46-.08-1.39 1.5-3.32 1.9-4.8 1.9-2.31 0-3.92-1.3-3.95-3.26 0-2.32 2.64-3.5 5.27-3.5.76 0 1.52.1 2.22.3v-.35c0-1.48-1.02-2.1-2.48-2.1-1.12 0-2 .41-2.83 1.13-.19.16-.38.16-.54.02l-1.02-.89c-.19-.17-.19-.44-.02-.63.95-.97 2.4-1.63 4.41-1.63 2.87 0 4.49 1.56 4.49 4.3v4.61h.02c0 .41.34.75.75.75H19c.41 0 .75-.34.75-.75v-.86c0-.41-.34-.75-.75-.75h-.85zM15.4 12.06c-.52-.2-1.2-.33-1.84-.33-1.32 0-2.58.6-2.58 1.83 0 .97.77 1.56 1.88 1.56.9 0 1.83-.45 2.54-1.4v-1.66zm6.27 4c.16.2.06.5-.18.6-2.32.96-5.83 1.6-9.49 1.6-4.99 0-9.2-1.2-11.58-3.03-.21-.16-.21-.46 0-.61l1.1-1.01c.21-.19.52-.15.71.06 1.82 1.48 5.6 2.59 9.77 2.59 2.52 0 4.96-.4 6.94-.97.26-.08.54.12.73.37l1.98 2.4z" />
    </svg>
);

export const DatabaseIcon = ({ className, style }: IconProps) => (
    // Generic Database
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} style={{ color: '#EAF0BD', ...style }} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
);

export const ServiceNowIcon = ({ className, style }: IconProps) => (
    // ServiceNow - Green
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#81B5A1', ...style }} xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fillOpacity="0.2" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    </svg>
);

export const JavaIcon = ({ className, style }: IconProps) => (
    // Java - Coffee Cup
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#ED8B00', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9 14.8c-.8.8-2.6 1.4-4 1.4-2.6 0-5.4-2-6.5-6.6a14 14 0 0 1 0-4.3c.4 1 1.7 1.8 3 1.8 2.6 0 5.1-2.7 5.1-6.1 0-.3-.1-.6-.1-.8 2 2.6.2 6.1-2.9 6.1-.5 0-.9-.1-1.3-.2-.4 3.3 1.7 4.1 3 4.1 1.6 0 2.2-.8 2.7-1.4.2-.2.6-.2.8 0l.2.2c.2.2.3.5 0 .8zM20 7.3c-.6 0-1.1.2-1.5.5.4-2.3-1.6-4.5-5.2-4.5-2.1 0-4.2.8-5.3 1.5-.2.1-.2.4 0 .5l.2.2c.2.2.5.2.7.1 1-.6 2.8-1 4.5-1 3.5 0 4.2 2 3.8 3.8H17c-2.7 0-4.3 1.9-4.3 4.2 0 2.3 1.5 3.8 3.8 3.8 2.3 0 3.7-1.5 3.8-1.8.8.4 1.7.6 2.6.6 2.3 0 3.9-1.2 3.9-3.7 0-2.4-1.7-4.2-4-4.2zm-3.5 6.9c-1.3 0-2.2-.9-2.2-2.3 0-1.4.9-2.4 2.2-2.4h3.2c-.3 2.9-1.7 4.7-3.2 4.7z" />
    </svg>
);

export const SpringIcon = ({ className, style }: IconProps) => (
    // Spring - Green Leaf
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#6DB33F', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M21.2 16.2c0 .2-.1.3-.2.4-.1.1-.3.1-.4 0-1.5-.7-2.9-1.5-4.3-2.3-.2-.1-.2-.1-.3-.2.9 2.5 1.5 5 1.4 7.6 0 .4-.5.8-.9.7-3.2-1-6.2-2.3-9-3.9-2.9-1.6-5.4-3.6-7.5-5.8-.3-.3-.2-.8.2-.9.2 0 .4.1.5.2 2.8 2.9 6.2 5.1 10.1 6.1 1.2.3 2.4.5 3.7.6.4 0 .6-.2.7-.6 0-3.1-.9-5.9-2.6-8.5-.7-1-1.4-2-2.3-2.9-.8-.8-1.6-1.5-2.6-2.2-.3-.2-.3-.6-.1-.8.2-.3.6-.3.8-.1 1.2.8 2.2 1.7 3.2 2.7 1.1 1.1 2 2.3 2.8 3.5.7 1 1.2 2.1 1.6 3.2.1.2.3.3.5.3 1.5-1.1 3-2.2 4.4-3.3.2-.2.5-.2.7.1.1.2.1.4 0 .6-.5.6-1.2 1.1-1.8 1.6z" />
    </svg>
);

export const KafkaIcon = ({ className, style }: IconProps) => (
    // Kafka - Black/White simplified
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#ffffff', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0v24h24V0H0zm2 20h2V5H2v15zm5 0h2v-8h-2v8zm5 0h2v-5h-2v5zm4 0h3v-9h-3v9zm4 0h2V9h-2v11z" />
    </svg>
);

export const SwiftIcon = ({ className, style }: IconProps) => (
    // Swift - Orange Bird
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#F05138', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M22 2c-3 1-5 4-6 5 2-4 5-5 5-5 2-8 7-8 7l-1 1s2-2 4-3c-3 1-5 5-5 5-1 4-1 6-1 7 0 2 1 3 1 3s-2-1-3-3c-1-3 0-6 0-6s-1 2-2 4c-1 3-1 4 0 5 0 .2 0 .5.1.7 0 0-3-4-3-8 0-3 3-5 3-5S3 6 1 8c2-4 6-5 9-6 4-1 8 .6 12 0z" />
    </svg>
);

export const XcodeIcon = ({ className, style }: IconProps) => (
    // Xcode - Blue Hammer
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#1575F9', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9 7.1L15 2l2.1 5.1h-4.2zm-2.8 0L8 2 5.9 7.1h4.2zM2 9h20v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9zm4 4v6h2v-6H6zm12 0v6h2v-6h-2zm-6 0v6h2v-6h-2z" />
    </svg>
);

export const JavaScriptIcon = ({ className, style }: IconProps) => (
    // JS - Yellow
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#F7DF1E', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0zm22.03 22.03v-19H1.97v19h20.06zM11.5 16.5h2v-5h-2v5zm4 0h2v-3.5h-2v3.5z" />
        <text x="5" y="17" fontSize="10" fontWeight="bold" fill="black" fontFamily="Arial">JS</text>
    </svg>
);

export const AppleIcon = ({ className, style }: IconProps) => (
    // Apple - White
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#ffffff', ...style }} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.8 19.3c-1.1 1.6-2.3 3.2-4.1 3.2-1.8 0-2.3-1-4.4-1-2 0-2.6 1-4.3 1-1.7 0-3.3-1.8-5-4.4-2.6-3.8-2.2-9.4 2.2-11.3 2.1-.9 3.5-.2 4.7-.2 1.1 0 2.8-1.2 5-1 .9 0 2.6.4 3.7 1.9-3.2 1.6-2.6 6.3.6 7.6.1.4.3.9.6 1.2zM15.4 3.6c.9-1.1 1.5-2.6 1.3-3.6-1.3.1-2.9.9-3.8 2-.8 1-1.4 2.5-1.2 3.6 1.5.1 3-.8 3.7-2z" />
    </svg>
);
