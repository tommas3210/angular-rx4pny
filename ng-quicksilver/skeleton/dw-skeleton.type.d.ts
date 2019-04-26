export declare type ParagraphWidth = number | string | Array<number | string>;
export declare type AvatarShape = 'square' | 'circle';
export declare type AvatarSize = 'small' | 'large' | 'default';
export interface DwSkeletonAvatar {
    size?: AvatarSize;
    shape?: AvatarShape;
}
export interface DwSkeletonTitle {
    width?: number | string;
}
export interface DwSkeletonParagraph {
    rows?: number;
    width?: ParagraphWidth;
}
