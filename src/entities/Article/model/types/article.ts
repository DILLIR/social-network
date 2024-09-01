import { User } from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt'
}

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}
export interface ArticleBlockDefault {
    id: string;
    type: ArticleBlockType;
}
export interface ArticleCodeBLock extends ArticleBlockDefault {
    type: ArticleBlockType.CODE;
    code: string;
}
export interface ArticleImageBLock extends ArticleBlockDefault {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}
export interface ArticleTextBLock extends ArticleBlockDefault {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type ArticleBlock =
    | ArticleCodeBLock
    | ArticleImageBLock
    | ArticleTextBLock;

export enum ArticleType {
    'ALL' = 'ALL',
    'IT' = 'IT',
    'SCIENCE' = 'SCIENCE',
    'ECONOMICS' = 'ECONOMICS'
}

export enum ArticleView {
    LIST = 'LIST',
    GRID = 'GRID'
}

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
