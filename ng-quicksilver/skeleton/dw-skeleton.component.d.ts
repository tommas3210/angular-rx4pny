import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DwSkeletonAvatar, DwSkeletonParagraph, DwSkeletonTitle } from './dw-skeleton.type';
export declare class DwSkeletonComponent implements OnInit, OnChanges {
    title: DwSkeletonTitle;
    avatar: DwSkeletonAvatar;
    paragraph: DwSkeletonParagraph;
    avatarClassMap: any;
    rowsList: number[];
    widthList: Array<number | string>;
    dwActive: boolean;
    dwLoading: boolean;
    dwTitle: DwSkeletonTitle | boolean;
    dwAvatar: DwSkeletonAvatar | boolean;
    dwParagraph: DwSkeletonParagraph | boolean;
    private getTitleProps;
    private getAvatarProps;
    private getParagraphProps;
    private getProps;
    toCSSUnit(value?: number | string): string;
    private getWidthList;
    updateClassMap(): void;
    updateProps(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
