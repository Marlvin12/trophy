export interface SectionProps {
    id: string;
}

declare global {
    interface Window {
        openWaitlist?: () => void;
    }
}
