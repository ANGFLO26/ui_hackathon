import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MOCK_USER } from '../../data/mockData';

export const Header: React.FC = () => {
    const location = useLocation();
    const isDuelPage = location.pathname === '/duel';

    return (
        <header className="flex items-center justify-between border-b border-primary/20 bg-matrix-black px-6 h-14 z-50 sticky top-0">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-2xl text-primary">security</span>
                <div className="flex items-baseline gap-2">
                    <span className="text-white text-sm font-black uppercase tracking-widest">CYPHER TCG</span>
                    <span className="text-[10px] text-primary/60 font-mono tracking-widest border-l border-white/20 pl-2">PROTOCOL: CYAN_BRIDGE_V2.0</span>
                </div>
            </Link>

            <div className="flex gap-8 h-full">
                {isDuelPage ? (
                    <>
                        <div className="px-2 h-full flex items-center text-[11px] font-black uppercase tracking-[0.2em] phase-active">
                            [SUMMON]
                        </div>
                        <div className="px-2 h-full flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-white/30">
                            REVEAL
                        </div>
                        <div className="px-2 h-full flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-white/30">
                            INITIATIVE
                        </div>
                        <div className="px-2 h-full flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-white/30">
                            COMBAT
                        </div>
                    </>
                ) : (
                    <nav className="flex items-center gap-1 h-full">
                        <Link to="/market" className={`px-4 h-full flex items-center text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${location.pathname === '/market' ? 'text-primary border-b-2 border-primary' : 'text-white/40 hover:text-white'}`}>Storefront</Link>
                        <Link to="/inventory" className={`px-4 h-full flex items-center text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${location.pathname === '/inventory' ? 'text-primary border-b-2 border-primary' : 'text-white/40 hover:text-white'}`}>Inventory</Link>
                        <Link to="/chat" className={`px-4 h-full flex items-center text-[11px] font-bold tracking-[0.15em] uppercase transition-colors ${location.pathname === '/chat' ? 'text-primary border-b-2 border-primary' : 'text-white/40 hover:text-white'}`}>Missions</Link>
                    </nav>
                )}
            </div>

            <div className="flex items-center gap-6">

                {/* Network Status - Enhanced */}
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_5px_#00E5FF]"></span>
                        <span className="text-[9px] font-bold tracking-widest text-primary/80 uppercase">NETWORK</span>
                    </div>
                    <span className="text-[10px] font-mono text-white/60">SUI_MAINNET</span>
                </div>

                <div className="h-8 w-[1px] bg-white/10"></div>

                {/* Profile Section (from ui_tai) */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                    <div className="flex flex-col items-end leading-tight">
                        <span className="text-[9px] text-white/40 font-bold uppercase tracking-tighter">{MOCK_USER.username}</span>
                        <span className="text-[10px] text-primary font-mono">{MOCK_USER.walletAddress}</span>
                    </div>
                    <div className="size-8 rounded border border-primary/30 bg-cover bg-center overflow-hidden">
                        <img src={MOCK_USER.avatarUrl} alt="Profile" className="w-full h-full object-cover opacity-80" />
                    </div>
                </div>
            </div>
        </header>
    );
};
