export interface NotificationContextValue {
    showNotification: (msg: string, type: "success" | "error" | "info" | "warning") => void;
}

export interface BtnProps {
    text: string;
    icon?: string;
    className?: string;
    onClick?: () => void;
}


export interface VideoCardProps {
    title: string;
    image: string;
    publichingDate: number;
    onClick?: () => void;
}

export interface VideoProps {
    title: string;
    image: string;
    publishingDate: string;
}

export interface VideoStateProps {
    error: string | null;
    videos: VideoProps[],
}

export interface UserProfileProps {
    id?: number,
    email?: string,
    username: string,
    password?: string,
}
// Auth
export interface AuthProps {
    isLoggedIn: boolean,
    isInitialized?: boolean,
    user?: UserProfileProps | null,
    token?: string | null
}

export interface AuthActionProps {
    type: string,
    payload?: AuthProps,
}

export type JWTContextType = {
    isLoggedIn: boolean;
    isInitialized?: boolean;
    user?: UserProfileProps | null | undefined;
    logout: () => void;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, username: string,) => Promise<void>;
 
    // addEvent: ();
    resetPassword?: (email: string) => Promise<void>;
    updateProfile?: VoidFunction;
};

export interface userStateProps{
    user:UserProfileProps,
    error: string | null,
    isLoggedIn: boolean,
}