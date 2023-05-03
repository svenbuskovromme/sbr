import { useEffect, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import type { theme } from '../types/styles';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useTheme = () => {
    const [mode, setMode] = useState<'dark'|'light'>();
    const [theme, setTheme] = useState<theme>();

    useEffect(() => {
        if(typeof window !== 'undefined'){
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setMode('dark');
            }
            else{
                setMode('light');
            }
        }
    }, []);

    useEffect(() => {
        setTheme({
            backgroundColor: mode === 'dark' ? 'rgb(0,0,0)' : 'rgb(200,200,200)',
            boxColor: mode === 'dark' ? 'rgb(30,30,30)' : 'rgb(170, 170, 170)',
            fontFaded: mode === 'dark' ? 'rgb(160,160,160)' : 'rgb(50,50,50)',
            fontFull: mode === 'dark' ? 'rgb(235,235,235)' : 'rgb(20,20,20)',
            buttonColor: mode === 'dark' ? 'rgb(29, 41, 66)' : 'rgb(255,255,255)',
        });
    }, [mode]);

    return theme;
}