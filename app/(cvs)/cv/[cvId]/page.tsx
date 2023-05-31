import { notFound } from 'next/navigation';
import GeneralCV from './general';
import ReactCV from './react';

export default async function Page({params}: {params: {cvId: string}}) {
    return params.cvId === 'general' ? <GeneralCV /> : params.cvId === 'react' ? <ReactCV /> : notFound();
};