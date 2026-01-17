import React from 'react';
import { Header } from '../../components/shared/Header';
import { Footer } from '../../components/shared/Footer';
import { EventStream } from '../../components/duel/EventStream';
import { StatsPanel } from '../../components/duel/StatsPanel';
import { GameBoard } from '../../components/duel/GameBoard';

export const DuelPage: React.FC = () => {
    return (
        <div className="bg-background-dark text-white overflow-hidden h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex overflow-hidden">
                <EventStream />
                <GameBoard />
                <StatsPanel />
            </main>
            <Footer />
        </div>
    );
};
