import React, { useState } from 'react';
import { 
  Home, 
  CheckSquare, 
  TrendingUp, 
  Wallet, 
  User, 
  Bell, 
  Sparkles, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Play, 
  Users, 
  ChevronRight,
  ChevronLeft,
  Flame,
  Clock,
  CheckCircle2,
  Trophy,
  ShieldCheck,
  Globe,
  Settings as SettingsIcon,
  HelpCircle,
  LogOut,
  Send,
  MessageSquare,
  AlertCircle,
  Copy,
  ExternalLink,
  DollarSign
} from 'lucide-react';

export function App() {
  // Navigation State
  // Screens: splash, onb1, onb2, onb3, home, tasks, task-detail, binary, trading-detail, wallet, 
  // profile, referral, achievements, settings, notifications, support, football-detail, daily, leaderboard, withdraw-req, withdraw-history
  const [currentScreen, setCurrentScreen] = useState<string>('home');
  const [balance, setBalance] = useState<number>(12480);
  const [activeTab, setActiveTab] = useState<'home' | 'tasks' | 'predict' | 'wallet' | 'profile'>('home');
  const [copied, setCopied] = useState(false);
  const [showBonusModal, setShowBonusModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const copyReferral = () => {
    navigator.clipboard.writeText("MAJIX123");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navigateTab = (tab: 'home' | 'tasks' | 'predict' | 'wallet' | 'profile') => {
    setActiveTab(tab);
    if (tab === 'home') setCurrentScreen('home');
    if (tab === 'tasks') setCurrentScreen('tasks');
    if (tab === 'predict') setCurrentScreen('binary');
    if (tab === 'wallet') setCurrentScreen('wallet');
    if (tab === 'profile') setCurrentScreen('profile');
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col justify-between relative overflow-hidden bg-bg-darkest text-gray-200 border-x border-gold/10 font-sans">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-glow pointer-events-none" />

      {/* Top Header (Visible on regular screens) */}
      {!['splash', 'onb1', 'onb2', 'onb3'].includes(currentScreen) && (
        <header className="p-4 flex items-center justify-between z-20 border-b border-gold/10 bg-bg-darkest/80 backdrop-blur-md sticky top-0">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentScreen('home')}>
            <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center bg-bg-card shadow-sm shadow-gold/20">
              <span className="gold-text font-black text-lg">M</span>
            </div>
            <span className="font-extrabold tracking-wider text-xl gold-text uppercase">majix</span>
          </div>

          <div className="flex items-center space-x-2.5">
            <button 
              onClick={() => setCurrentScreen('daily')}
              className="p-2 rounded-xl bg-bg-card border border-gold/30 text-gold hover:scale-105 active:scale-95 transition-all flex items-center space-x-1"
            >
              <Sparkles size={16} />
            </button>
            <button 
              onClick={() => setCurrentScreen('notifications')}
              className="p-2 rounded-xl bg-bg-card border border-gold/30 text-gold hover:scale-105 active:scale-95 transition-all relative"
            >
              <Bell size={16} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div 
              onClick={() => setCurrentScreen('profile')}
              className="w-9 h-9 rounded-xl bg-gold/20 border border-gold/60 flex items-center justify-center font-black text-xs text-gold cursor-pointer hover:border-gold transition-all"
            >
              MN
            </div>
          </div>
        </header>
      )}

      {/* Main Dynamic View */}
      <main className={`flex-1 z-10 ${!['splash', 'onb1', 'onb2', 'onb3'].includes(currentScreen) ? 'pb-24 px-4 pt-3' : ''}`}>
        
        {/* ================= SCREEN 1: SPLASH ================= */}
        {currentScreen === 'splash' && (
          <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center space-y-8 bg-bg-darkest">
            <div className="w-28 h-28 rounded-3xl border-2 border-gold flex items-center justify-center bg-card-gradient shadow-2xl shadow-gold/30 animate-pulse">
              <span className="text-6xl font-black gold-text">M</span>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold gold-text tracking-widest uppercase">majix</h1>
              <p className="text-gray-400 text-xs tracking-widest mt-1">EARN • TRADE • WIN</p>
            </div>
            <div className="w-48 h-1.5 bg-bg-card border border-gold/20 rounded-full overflow-hidden">
              <div className="h-full bg-gold-gradient w-3/4 animate-pulse rounded-full" />
            </div>
            <button 
              onClick={() => setCurrentScreen('onb1')}
              className="mt-6 px-8 py-2.5 rounded-xl bg-gold text-bg-darkest font-bold text-xs active:scale-95 transition-all"
            >
              Launch App
            </button>
          </div>
        )}

        {/* ================= SCREEN 2: ONBOARDING 1 ================= */}
        {currentScreen === 'onb1' && (
          <div className="min-h-screen flex flex-col justify-between p-6 text-center bg-bg-darkest">
            <div className="pt-10">
              <span className="font-extrabold text-2xl gold-text tracking-widest">majix</span>
            </div>
            <div className="space-y-6">
              <div className="w-40 h-40 mx-auto rounded-3xl bg-card-gradient border border-gold/40 flex items-center justify-center shadow-xl shadow-gold/10">
                <Trophy size={64} className="text-gold animate-bounce" />
              </div>
              <h2 className="text-2xl font-bold text-gray-100">Welcome to Majix</h2>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Complete tasks, earn MJX coins, and turn your time into profit with our advanced earning system.
              </p>
            </div>
            <div className="space-y-3 pb-8">
              <button 
                onClick={() => setCurrentScreen('onb2')}
                className="w-full py-3.5 rounded-2xl bg-gold text-bg-darkest font-extrabold text-sm active:scale-95 transition-all shadow-lg shadow-gold/20"
              >
                Get Started
              </button>
              <div className="flex justify-center space-x-1.5">
                <span className="w-6 h-1.5 rounded-full bg-gold" />
                <span className="w-2 h-1.5 rounded-full bg-gray-700" />
                <span className="w-2 h-1.5 rounded-full bg-gray-700" />
              </div>
            </div>
          </div>
        )}

        {/* ================= SCREEN 3: ONBOARDING 2 ================= */}
        {currentScreen === 'onb2' && (
          <div className="min-h-screen flex flex-col justify-between p-6 text-center bg-bg-darkest">
            <div className="pt-10">
              <span className="font-extrabold text-2xl gold-text tracking-widest">majix</span>
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-100">Do Simple Tasks</h2>
              <div className="space-y-3 text-left">
                {[
                  { icon: Play, title: "Watch Videos", desc: "Short viral clips & sponsor reels" },
                  { icon: Users, title: "Follow & Like", desc: "Social channels and community accounts" },
                  { icon: CheckSquare, title: "Complete Tasks", desc: "Surveys, tests, and partner challenges" }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-bg-card border border-gold/20 flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-gold/10 text-gold">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-200">{item.title}</h4>
                      <p className="text-[11px] text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3 pb-8">
              <button 
                onClick={() => setCurrentScreen('onb3')}
                className="w-full py-3.5 rounded-2xl bg-gold text-bg-darkest font-extrabold text-sm active:scale-95 transition-all shadow-lg shadow-gold/20"
              >
                Next
              </button>
              <div className="flex justify-center space-x-1.5">
                <span className="w-2 h-1.5 rounded-full bg-gray-700" />
                <span className="w-6 h-1.5 rounded-full bg-gold" />
                <span className="w-2 h-1.5 rounded-full bg-gray-700" />
              </div>
            </div>
          </div>
        )}

        {/* ================= SCREEN 4: ONBOARDING 3 ================= */}
        {currentScreen === 'onb3' && (
          <div className="min-h-screen flex flex-col justify-between p-6 text-center bg-bg-darkest">
            <div className="pt-10">
              <span className="font-extrabold text-2xl gold-text tracking-widest">majix</span>
            </div>
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-100">Use Your MJX</h2>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-card-gradient border border-gold/30 text-left flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-gold flex items-center">
                      <Flame size={16} className="mr-1 text-orange-400" /> Football Prediction
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-1">Win real rewards on major matches</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-card-gradient border border-gold/30 text-left flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-gold flex items-center">
                      <TrendingUp size={16} className="mr-1 text-emerald-400" /> Binary Trading
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-1">Predict 60s crypto price directions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3 pb-8">
              <button 
                onClick={() => setCurrentScreen('home')}
                className="w-full py-3.5 rounded-2xl bg-gold text-bg-darkest font-extrabold text-sm active:scale-95 transition-all shadow-lg shadow-gold/20"
              >
                Start Earning Now
              </button>
              <div className="flex justify-center space-x-1.5">
                <span className="w-2 h-1.5 rounded-full bg-gray-700" />
                <span className="w-2 h-1.5 rounded-full bg-gray-700" />
                <span className="w-6 h-1.5 rounded-full bg-gold" />
              </div>
            </div>
          </div>
        )}

        {/* ================= SCREEN 5: HOME DASHBOARD ================= */}
        {currentScreen === 'home' && (
          <div className="space-y-4">
            {/* Balance Card */}
            <div className="p-5 rounded-3xl bg-card-gradient border border-gold/30 shadow-xl shadow-gold/5 relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[11px] text-gray-400 font-semibold tracking-wider uppercase">MJX BALANCE</span>
                  <div className="flex items-baseline space-x-1.5 mt-1">
                    <h2 className="text-3xl font-black gold-text tracking-tight">
                      {balance.toLocaleString()}
                    </h2>
                    <span className="text-xs font-black text-gold">MJX</span>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center mt-1">
                    ≈ ${(balance / 10).toLocaleString('en-US', { minimumFractionDigits: 2 })} 
                    <span className="ml-1.5 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">+12.5%</span>
                  </span>
                </div>
                
                <div className="w-11 h-11 rounded-2xl bg-gold/10 border border-gold/40 flex items-center justify-center text-gold">
                  <Wallet size={22} />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                <button 
                  onClick={() => setCurrentScreen('wallet')}
                  className="py-2.5 px-4 rounded-xl bg-gold text-bg-darkest font-black text-xs flex items-center justify-center space-x-1.5 hover:brightness-110 active:scale-95 transition-all shadow-md shadow-gold/20"
                >
                  <ArrowDownLeft size={16} />
                  <span>Deposit</span>
                </button>
                <button 
                  onClick={() => setCurrentScreen('withdraw-req')}
                  className="py-2.5 px-4 rounded-xl bg-bg-card border border-gold/40 text-gold font-bold text-xs flex items-center justify-center space-x-1.5 hover:bg-gold/10 active:scale-95 transition-all"
                >
                  <ArrowUpRight size={16} />
                  <span>Withdraw</span>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 pt-3 border-t border-gold/10">
                <div className="flex justify-between text-[11px] text-gray-400 mb-1.5">
                  <span>Withdrawal Progress</span>
                  <span className="text-gold font-semibold">12,480 / 20,000 MJX</span>
                </div>
                <div className="w-full h-2 bg-bg-darkest rounded-full overflow-hidden border border-gold/20">
                  <div className="h-full bg-gold-gradient rounded-full" style={{ width: '62.4%' }} />
                </div>
                <span className="text-[10px] text-gray-400 mt-1 block">7,520 MJX to unlock instant withdrawal</span>
              </div>
            </div>

            {/* Quick Navigation 4-grid */}
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { icon: CheckSquare, label: 'Tasks', scr: 'tasks' },
                { icon: Flame, label: 'Football', scr: 'football-detail' },
                { icon: TrendingUp, label: 'Binary', scr: 'binary' },
                { icon: Trophy, label: 'Ranking', scr: 'leaderboard' },
              ].map((item, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentScreen(item.scr)}
                  className="p-3 rounded-2xl bg-bg-card border border-gold/20 flex flex-col items-center justify-center space-y-1.5 active:scale-95 transition-all hover:border-gold/50"
                >
                  <div className="p-2 rounded-xl bg-gold/10 text-gold">
                    <item.icon size={18} />
                  </div>
                  <span className="text-[11px] font-bold text-gray-300">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Earn MJX Section */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-xs tracking-wider uppercase text-gray-300">Earn MJX</h3>
                <span 
                  onClick={() => setCurrentScreen('tasks')}
                  className="text-xs text-gold font-medium flex items-center cursor-pointer hover:underline"
                >
                  View All <ChevronRight size={14} />
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { title: 'Watch & Earn', reward: '+250 MJX', icon: Play, scr: 'task-detail' },
                  { title: 'Follow & Earn', reward: '+200 MJX', icon: Users, scr: 'tasks' },
                  { title: 'Daily Bonus', reward: '+100 MJX', icon: Sparkles, scr: 'daily' },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => setCurrentScreen(item.scr)}
                    className="p-3 rounded-2xl bg-bg-card border border-gold/20 flex flex-col items-center text-center space-y-2 cursor-pointer hover:border-gold/50 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                      <item.icon size={16} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-300 leading-tight">{item.title}</span>
                    <span className="text-[10px] font-black text-gold bg-gold/10 px-2 py-0.5 rounded-full border border-gold/20">
                      {item.reward}
                    </span>
                    <button className="w-full py-1 rounded-lg bg-gold text-bg-darkest text-[10px] font-black">
                      Start
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Match Card */}
            <div className="space-y-2.5">
              <h3 className="font-bold text-xs tracking-wider uppercase text-gray-300">Featured Match</h3>
              <div 
                onClick={() => setCurrentScreen('football-detail')}
                className="p-4 rounded-2xl bg-card-gradient border border-gold/30 cursor-pointer hover:border-gold transition-all"
              >
                <div className="flex justify-between items-center mb-2 text-xs">
                  <span className="text-gold font-bold flex items-center">
                    <Flame size={14} className="text-orange-400 mr-1" /> Champions League
                  </span>
                  <span className="text-gray-400 text-[10px]">Today 21:00</span>
                </div>
                <div className="flex items-center justify-between my-2">
                  <div className="text-center w-1/3 font-bold text-xs text-gray-200">Real Madrid</div>
                  <div className="text-center font-black text-gold text-xs px-2 py-0.5 rounded-full bg-bg-darkest border border-gold/30">VS</div>
                  <div className="text-center w-1/3 font-bold text-xs text-gray-200">Man City</div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                  <div className="p-1.5 rounded-xl bg-bg-darkest border border-gold/20 text-[11px]">
                    1: <span className="text-gold font-black">1.85</span>
                  </div>
                  <div className="p-1.5 rounded-xl bg-bg-darkest border border-gold/20 text-[11px]">
                    X: <span className="text-gold font-black">3.60</span>
                  </div>
                  <div className="p-1.5 rounded-xl bg-bg-darkest border border-gold/20 text-[11px]">
                    2: <span className="text-gold font-black">4.20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SCREEN 6: TASKS CENTER ================= */}
        {currentScreen === 'tasks' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-gray-100 flex items-center">
                <CheckSquare size={20} className="text-gold mr-2" /> Tasks Center
              </h2>
              <span className="text-xs text-gold font-semibold bg-gold/10 px-2.5 py-1 rounded-full border border-gold/30">
                12 Available
              </span>
            </div>

            {/* Filter tags */}
            <div className="flex space-x-2 overflow-x-auto pb-1 text-xs">
              {['All', 'Watch', 'Follow', 'Social', 'Other'].map((tag, i) => (
                <button 
                  key={i} 
                  className={`px-3 py-1.5 rounded-xl font-bold ${
                    i === 0 ? 'bg-gold text-bg-darkest' : 'bg-bg-card border border-gold/20 text-gray-400'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Task list items */}
            <div className="space-y-2.5">
              {[
                { title: 'Watch a Video (2:54 min)', reward: '+250 MJX', icon: Play, scr: 'task-detail' },
                { title: 'Follow on X (Twitter)', reward: '+200 MJX', icon: Users, scr: 'tasks' },
                { title: 'Join Telegram Channel', reward: '+150 MJX', icon: Send, scr: 'tasks' },
                { title: 'Subscribe to YouTube Channel', reward: '+150 MJX', icon: Play, scr: 'tasks' },
                { title: 'Like & Retweet Post', reward: '+100 MJX', icon: Users, scr: 'tasks' },
                { title: 'Invite 3 Active Friends', reward: '+600 MJX', icon: Users, scr: 'referral' },
              ].map((task, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setCurrentScreen(task.scr)}
                  className="p-3.5 rounded-2xl bg-bg-card border border-gold/20 flex items-center justify-between hover:border-gold/60 cursor-pointer transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-gold/10 text-gold">
                      <task.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-200">{task.title}</h4>
                      <span className="text-[11px] font-black text-gold">{task.reward}</span>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 rounded-xl bg-gold text-bg-darkest text-xs font-black">
                    Start
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SCREEN 7: TASK DETAIL ================= */}
        {currentScreen === 'task-detail' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('tasks')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Tasks
            </button>

            <div className="aspect-video w-full rounded-2xl bg-black border border-gold/30 relative flex items-center justify-center overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&auto=format&fit=crop&q=60" 
                alt="Video thumbnail"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute w-14 h-14 rounded-full bg-gold/80 text-bg-darkest flex items-center justify-center shadow-lg">
                <Play size={24} fill="currentColor" />
              </div>
              <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded">2:54</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-base font-bold text-gray-100">Watch Sponsor Video & Earn</h2>
              <span className="inline-block text-xs font-black text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                +250 MJX
              </span>
              <p className="text-xs text-gray-400 leading-relaxed">
                Watch the complete video without skipping to claim your reward. Make sure to stay until the end to receive validation.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-bg-card border border-gold/20 space-y-2">
              <h4 className="text-xs font-bold text-gray-300">Requirements:</h4>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <CheckCircle2 size={14} className="text-gold" />
                <span>Watch the full video (min. 120 seconds)</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <CheckCircle2 size={14} className="text-gold" />
                <span>Stay until the countdown finishes</span>
              </div>
            </div>

            <button 
              onClick={() => {
                setBalance(b => b + 250);
                setShowBonusModal(true);
              }}
              className="w-full py-3.5 rounded-2xl bg-gold text-bg-darkest font-black text-sm active:scale-95 transition-all shadow-lg shadow-gold/20"
            >
              Start & Claim +250 MJX
            </button>
          </div>
        )}

        {/* ================= SCREEN 8 & 9: BINARY TRADING ================= */}
        {currentScreen === 'binary' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-black text-gray-100 flex items-center">
                  <TrendingUp size={20} className="text-gold mr-2" /> Binary Trading
                </h2>
                <p className="text-[11px] text-gray-400">Predict market trends in 60s</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-400 block">Balance</span>
                <span className="text-xs font-black text-gold">{balance.toLocaleString()} MJX</span>
              </div>
            </div>

            {/* Trading Pair Cards */}
            <div className="space-y-2.5">
              {[
                { pair: 'BTC/USDT', price: '94,320.50', change: '+2.4%', up: true },
                { pair: 'ETH/USDT', price: '3,480.20', change: '-1.1%', up: false },
                { pair: 'SOL/USDT', price: '188.40', change: '+5.7%', up: true },
                { pair: 'EUR/USD', price: '1.0842', change: '+0.1%', up: true },
              ].map((coin, idx) => (
                <div 
                  key={idx}
                  onClick={() => setCurrentScreen('trading-detail')}
                  className="p-3.5 rounded-2xl bg-bg-card border border-gold/20 flex items-center justify-between cursor-pointer hover:border-gold transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center font-black text-gold text-xs">
                      {coin.pair.split('/')[0]}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-200">{coin.pair}</h4>
                      <span className="text-[11px] text-gray-400 font-mono">${coin.price}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-bold ${coin.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {coin.change}
                    </span>
                    <button className="px-3 py-1 rounded-xl bg-gold/20 border border-gold/40 text-gold text-xs font-black">
                      Trade
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SCREEN 9: TRADING DETAIL (Candle Chart) ================= */}
        {currentScreen === 'trading-detail' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('binary')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Markets
            </button>

            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-black text-gray-100">BTC/USDT</h3>
                <span className="text-xs font-mono text-emerald-400 font-bold">$94,320.50 (+2.4%)</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-gray-400 block">Payout Ratio</span>
                <span className="text-xs font-black text-gold">83% Profit</span>
              </div>
            </div>

            {/* Mock Chart Area */}
            <div className="h-44 rounded-2xl bg-bg-card border border-gold/30 p-3 relative flex flex-col justify-between overflow-hidden">
              <div className="flex justify-between text-[10px] text-gray-400 border-b border-gold/10 pb-1">
                <span>Timeframe: 1m</span>
                <span className="text-gold font-bold">Live Candle Stream</span>
              </div>
              {/* Fake Candlesticks SVG */}
              <div className="h-28 flex items-end justify-between px-2">
                {[40, 60, 45, 75, 55, 90, 70, 85, 95, 65, 80, 100, 85, 92].map((h, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-0.5 bg-gray-600 h-2" />
                    <div 
                      className={`w-3 rounded-sm ${i % 2 === 0 ? 'bg-emerald-400' : 'bg-rose-500'}`} 
                      style={{ height: `${h * 0.7}px` }} 
                    />
                    <div className="w-0.5 bg-gray-600 h-2" />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[9px] text-gray-500">
                <span>12:00</span>
                <span>12:01</span>
                <span>12:02</span>
                <span>12:03</span>
                <span>Live</span>
              </div>
            </div>

            {/* Order Controls */}
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => {
                  setBalance(b => b + 83);
                  setShowBonusModal(true);
                }}
                className="py-3.5 rounded-2xl bg-emerald-500 text-bg-darkest font-black text-sm flex items-center justify-center space-x-2 active:scale-95 shadow-lg shadow-emerald-500/20"
              >
                <span>HIGHER (UP)</span>
              </button>
              <button 
                onClick={() => setShowErrorModal(true)}
                className="py-3.5 rounded-2xl bg-rose-500 text-white font-black text-sm flex items-center justify-center space-x-2 active:scale-95 shadow-lg shadow-rose-500/20"
              >
                <span>LOWER (DOWN)</span>
              </button>
            </div>
            <p className="text-[11px] text-center text-gray-400">Trade Duration: 60 Seconds • Min: 100 MJX</p>
          </div>
        )}

        {/* ================= SCREEN 10: WALLET ================= */}
        {currentScreen === 'wallet' && (
          <div className="space-y-4">
            <h2 className="text-lg font-black text-gray-100 flex items-center">
              <Wallet size={20} className="text-gold mr-2" /> My Wallet
            </h2>

            {/* Wallet Big Balance */}
            <div className="p-6 rounded-3xl bg-card-gradient border border-gold/30 text-center space-y-2 shadow-xl shadow-gold/5">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Total MJX Balance</span>
              <h1 className="text-3xl font-black gold-text">{balance.toLocaleString()} MJX</h1>
              <span className="text-xs text-emerald-400 font-semibold block">
                ≈ ${(balance / 10).toFixed(2)} USD
              </span>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <button 
                  onClick={() => alert('Deposit Feature Coming Soon')}
                  className="py-2.5 rounded-xl bg-gold text-bg-darkest font-bold text-xs active:scale-95"
                >
                  Deposit
                </button>
                <button 
                  onClick={() => setCurrentScreen('withdraw-req')}
                  className="py-2.5 rounded-xl bg-bg-card border border-gold/40 text-gold font-bold text-xs active:scale-95"
                >
                  Cash-Out
                </button>
              </div>
            </div>

            {/* Quick Link to History */}
            <div className="flex justify-between items-center pt-2">
              <h3 className="font-bold text-xs uppercase tracking-wider text-gray-300">Recent Transactions</h3>
              <span 
                onClick={() => setCurrentScreen('withdraw-history')}
                className="text-xs text-gold font-semibold cursor-pointer"
              >
                View History
              </span>
            </div>

            <div className="space-y-2">
              {[
                { title: 'Task Reward', amount: '+250 MJX', date: 'Today 14:32', type: 'in' },
                { title: 'Referral Bonus', amount: '+500 MJX', date: 'Yesterday 19:10', type: 'in' },
                { title: 'Binary Trade Win', amount: '+83 MJX', date: '2 days ago', type: 'in' },
                { title: 'Binary Trade Loss', amount: '-100 MJX', date: '3 days ago', type: 'out' },
              ].map((tx, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-bg-card border border-gold/20 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-gray-200">{tx.title}</h4>
                    <span className="text-[10px] text-gray-500">{tx.date}</span>
                  </div>
                  <span className={`text-xs font-black ${tx.type === 'in' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {tx.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SCREEN 11: PROFILE ================= */}
        {currentScreen === 'profile' && (
          <div className="space-y-4">
            {/* User Profile Card */}
            <div className="p-5 rounded-3xl bg-card-gradient border border-gold/30 text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center font-black text-xl text-gold">
                MN
              </div>
              <div>
                <h3 className="text-sm font-black text-gray-100">Majid_Original</h3>
                <span className="text-[11px] text-gold font-semibold">Level 3 Master • 2,480/5,000 XP</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gold/10 text-center">
                <div>
                  <span className="text-[10px] text-gray-400 block">Total Earned</span>
                  <span className="text-xs font-black text-gold">12,480 MJX</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">Total Tasks</span>
                  <span className="text-xs font-black text-gold">48</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">Streak</span>
                  <span className="text-xs font-black text-gold">7 Days</span>
                </div>
              </div>
            </div>

            {/* Navigation Menus */}
            <div className="space-y-2">
              {[
                { icon: Users, label: 'Refer & Earn', scr: 'referral' },
                { icon: Trophy, label: 'Achievements', scr: 'achievements' },
                { icon: HelpCircle, label: 'Help & Support', scr: 'support' },
                { icon: SettingsIcon, label: 'Settings', scr: 'settings' },
              ].map((menu, i) => (
                <div 
                  key={i}
                  onClick={() => setCurrentScreen(menu.scr)}
                  className="p-3.5 rounded-2xl bg-bg-card border border-gold/20 flex items-center justify-between hover:border-gold/50 cursor-pointer transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-gold/10 text-gold">
                      <menu.icon size={18} />
                    </div>
                    <span className="text-xs font-bold text-gray-200">{menu.label}</span>
                  </div>
                  <ChevronRight size={16} className="text-gray-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SCREEN 12: REFERRAL ================= */}
        {currentScreen === 'referral' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('profile')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Profile
            </button>

            <div className="p-6 rounded-3xl bg-card-gradient border border-gold/30 text-center space-y-3">
              <Users size={40} className="text-gold mx-auto" />
              <h2 className="text-lg font-black text-gray-100">Invite & Earn Together</h2>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Share your referral link and earn <span className="text-gold font-bold">20% commission</span> of all tasks completed by your invited friends!
              </p>

              {/* Referral Code Box */}
              <div className="p-3 rounded-2xl bg-bg-darkest border border-gold/30 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-gold tracking-widest pl-2">MAJIX123</span>
                <button 
                  onClick={copyReferral}
                  className="px-3 py-1.5 rounded-xl bg-gold text-bg-darkest font-bold text-xs flex items-center space-x-1"
                >
                  <Copy size={14} />
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-4 rounded-2xl bg-bg-card border border-gold/20">
                <span className="text-[11px] text-gray-400 block">Total Invites</span>
                <span className="text-lg font-black text-gold">12</span>
              </div>
              <div className="p-4 rounded-2xl bg-bg-card border border-gold/20">
                <span className="text-[11px] text-gray-400 block">Total Earned</span>
                <span className="text-lg font-black text-gold">2,480 MJX</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= SCREEN 13: ACHIEVEMENTS ================= */}
        {currentScreen === 'achievements' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('profile')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Profile
            </button>

            <h2 className="text-lg font-black text-gray-100 flex items-center">
              <Trophy size={20} className="text-gold mr-2" /> Achievements
            </h2>

            <div className="space-y-2.5">
              {[
                { title: 'First Task', desc: 'Complete your first task', reward: '+500 MJX', done: true },
                { title: 'Video Master', desc: 'Watch 10 videos completely', reward: '+1,000 MJX', done: true },
                { title: 'Social Star', desc: 'Follow 20 accounts', reward: '+1,500 MJX', done: false },
                { title: 'Referral Pro', desc: 'Invite 5 active friends', reward: '+2,000 MJX', done: false },
                { title: 'Master Trader', desc: 'Make 10 successful binary predictions', reward: '+3,000 MJX', done: false },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-bg-card border border-gold/20 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-xl ${item.done ? 'bg-gold/20 text-gold border border-gold/40' : 'bg-gray-800 text-gray-500'}`}>
                      <Trophy size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-200">{item.title}</h4>
                      <p className="text-[10px] text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-black ${item.done ? 'text-gold' : 'text-gray-500'}`}>
                    {item.reward}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SCREEN 14: SETTINGS ================= */}
        {currentScreen === 'settings' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('profile')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Profile
            </button>

            <h2 className="text-lg font-black text-gray-100 flex items-center">
              <SettingsIcon size={20} className="text-gold mr-2" /> Settings
            </h2>

            <div className="p-3.5 rounded-2xl bg-bg-card border border-gold/20 space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gold/10">
                <span className="text-xs font-bold text-gray-300">Language</span>
                <span className="text-xs text-gold font-semibold">English (UAE)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gold/10">
                <span className="text-xs font-bold text-gray-300">Theme</span>
                <span className="text-xs text-gold font-semibold">Dark Gold</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gold/10">
                <span className="text-xs font-bold text-gray-300">Security</span>
                <span className="text-xs text-gold font-semibold">2FA & Password</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-xs font-bold text-gray-300">Version</span>
                <span className="text-xs text-gray-400 font-mono">1.0.0 (Gold Release)</span>
              </div>
            </div>

            <button 
              onClick={() => setCurrentScreen('splash')}
              className="w-full py-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-rose-400 font-bold text-xs flex items-center justify-center space-x-2"
            >
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
          </div>
        )}

        {/* ================= SCREEN 15: NOTIFICATIONS ================= */}
        {currentScreen === 'notifications' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Home
            </button>

            <h2 className="text-lg font-black text-gray-100 flex items-center">
              <Bell size={20} className="text-gold mr-2" /> Notifications
            </h2>

            <div className="space-y-2.5">
              {[
                { title: 'Task Reward', desc: 'You received +250 MJX', time: '10m ago', icon: Sparkles },
                { title: 'Match Result', desc: 'Real Madrid won vs Man City', time: '1h ago', icon: Flame },
                { title: 'Referral Bonus', desc: 'Your friend completed their first task', time: '3h ago', icon: Users },
                { title: 'System Update', desc: 'New luxury theme is live!', time: '1d ago', icon: Bell },
              ].map((n, i) => (
                <div key={i} className="p-3 rounded-2xl bg-bg-card border border-gold/20 flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-gold/10 text-gold mt-0.5">
                    <n.icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-bold text-gray-200">{n.title}</h4>
                      <span className="text-[10px] text-gray-500">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SCREEN 16: HELP & SUPPORT ================= */}
        {currentScreen === 'support' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('profile')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Profile
            </button>

            <h2 className="text-lg font-black text-gray-100 flex items-center">
              <HelpCircle size={20} className="text-gold mr-2" /> Help & Support
            </h2>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-gray-400">Frequently Asked Questions</h4>
              {['How to earn MJX?', 'How to withdraw funds?', 'What is the minimum cash-out?', 'Is it safe & instant?'].map((q, i) => (
                <div key={i} className="p-3 rounded-xl bg-bg-card border border-gold/20 flex justify-between items-center text-xs font-semibold text-gray-300">
                  <span>{q}</span>
                  <ChevronRight size={14} className="text-gray-500" />
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-card-gradient border border-gold/30 text-center space-y-2 mt-4">
              <MessageSquare size={28} className="text-gold mx-auto" />
              <h4 className="text-xs font-bold text-gray-200">Need personal assistance?</h4>
              <p className="text-[11px] text-gray-400">Our support team is available 24/7 on Telegram</p>
              <button 
                onClick={() => window.open('https://t.me/', '_blank')}
                className="w-full py-2.5 rounded-xl bg-gold text-bg-darkest font-bold text-xs mt-2"
              >
                Open Telegram Support
              </button>
            </div>
          </div>
        )}

        {/* ================= SCREEN 17: FOOTBALL DETAIL ================= */}
        {currentScreen === 'football-detail' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Home
            </button>

            <div className="p-5 rounded-3xl bg-card-gradient border border-gold/30 text-center space-y-3">
              <span className="text-xs text-gold font-bold uppercase tracking-wider">Champions League • 21:00</span>
              <div className="flex items-center justify-around py-2">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-bg-darkest border border-gold/30 flex items-center justify-center mx-auto text-sm font-black text-gray-200">RM</div>
                  <span className="text-xs font-bold block mt-1">Real Madrid</span>
                </div>
                <span className="text-base font-black text-gold">VS</span>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-bg-darkest border border-gold/30 flex items-center justify-center mx-auto text-sm font-black text-gray-200">MC</div>
                  <span className="text-xs font-bold block mt-1">Man City</span>
                </div>
              </div>

              {/* Betting Odds */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <button 
                  onClick={() => alert('Predicted: Real Madrid')}
                  className="p-2.5 rounded-xl bg-bg-darkest border border-gold/30 hover:border-gold active:scale-95 text-xs font-bold"
                >
                  <span className="text-[10px] text-gray-400 block">Win 1</span>
                  <span className="text-gold font-black">1.85</span>
                </button>
                <button 
                  onClick={() => alert('Predicted: Draw')}
                  className="p-2.5 rounded-xl bg-bg-darkest border border-gold/30 hover:border-gold active:scale-95 text-xs font-bold"
                >
                  <span className="text-[10px] text-gray-400 block">Draw X</span>
                  <span className="text-gold font-black">3.60</span>
                </button>
                <button 
                  onClick={() => alert('Predicted: Man City')}
                  className="p-2.5 rounded-xl bg-bg-darkest border border-gold/30 hover:border-gold active:scale-95 text-xs font-bold"
                >
                  <span className="text-[10px] text-gray-400 block">Win 2</span>
                  <span className="text-gold font-black">4.20</span>
                </button>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-bg-card border border-gold/20 space-y-2">
              <h4 className="text-xs font-bold text-gray-300">Match Analysis & H2H</h4>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Real Madrid has won 4 of their last 5 home encounters in European competitions. Manchester City is on an 8-match unbeaten streak.
              </p>
            </div>
          </div>
        )}

        {/* ================= SCREEN 18: WITHDRAW REQUEST ================= */}
        {currentScreen === 'withdraw-req' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back
            </button>

            <h2 className="text-lg font-black text-gray-100 flex items-center">
              <ArrowUpRight size={20} className="text-gold mr-2" /> Withdraw MJX
            </h2>

            <div className="p-5 rounded-3xl bg-card-gradient border border-gold/30 space-y-4">
              <div>
                <span className="text-[11px] text-gray-400 block">Available to Withdraw</span>
                <span className="text-2xl font-black gold-text">{balance.toLocaleString()} MJX</span>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-300">Select Amount</label>
                <div className="grid grid-cols-3 gap-2">
                  {[5000, 10000, 20000].map((amt) => (
                    <button key={amt} className="p-2 rounded-xl bg-bg-darkest border border-gold/30 text-xs font-black text-gold">
                      {amt.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-300">USDT (TRC20) / TON Wallet Address</label>
                <input 
                  type="text" 
                  placeholder="Paste your wallet address here"
                  className="w-full p-3 rounded-xl bg-bg-darkest border border-gold/30 text-xs text-gray-200 outline-none focus:border-gold"
                />
              </div>

              <button 
                onClick={() => {
                  alert('Withdrawal request submitted for review!');
                  setCurrentScreen('withdraw-history');
                }}
                className="w-full py-3 rounded-xl bg-gold text-bg-darkest font-black text-xs shadow-lg shadow-gold/20 active:scale-95"
              >
                Request Withdrawal
              </button>
            </div>
          </div>
        )}

        {/* ================= SCREEN 19: DAILY BONUS ================= */}
        {currentScreen === 'daily' && (
          <div className="space-y-4 text-center">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="text-xs font-bold text-gold flex items-center mb-1 text-left"
            >
              <ChevronLeft size={16} /> Back to Home
            </button>

            <div className="p-6 rounded-3xl bg-card-gradient border border-gold/30 space-y-4">
              <Sparkles size={48} className="text-gold mx-auto animate-spin" />
              <h2 className="text-xl font-black text-gray-100">Daily Bonus</h2>
              <p className="text-xs text-gray-400">Claim your free bonus every 24 hours to boost your streak!</p>

              <div className="p-4 rounded-2xl bg-bg-darkest border border-gold/30">
                <span className="text-2xl font-black gold-text">+250 MJX</span>
                <span className="text-[10px] text-gray-500 block mt-1">Next bonus resets at 00:00 UTC</span>
              </div>

              <button 
                onClick={() => {
                  setBalance(b => b + 250);
                  setShowBonusModal(true);
                }}
                className="w-full py-3.5 rounded-2xl bg-gold text-bg-darkest font-black text-sm active:scale-95 shadow-lg shadow-gold/20"
              >
                Claim Daily 250 MJX
              </button>
            </div>
          </div>
        )}

        {/* ================= SCREEN 21: LEADERBOARD ================= */}
        {currentScreen === 'leaderboard' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Home
            </button>

            <h2 className="text-lg font-black text-gray-100 flex items-center">
              <Trophy size={20} className="text-gold mr-2" /> Top Earners
            </h2>

            <div className="space-y-2">
              {[
                { rank: 1, name: 'CryptoKing', amount: '58,450 MJX' },
                { rank: 2, name: 'TraderPro', amount: '42,180 MJX' },
                { rank: 3, name: 'Majid_Original (You)', amount: '38,210 MJX' },
                { rank: 4, name: 'LuckyUser', amount: '32,600 MJX' },
                { rank: 5, name: 'FastEarner', amount: '28,450 MJX' },
              ].map((item) => (
                <div 
                  key={item.rank} 
                  className={`p-3.5 rounded-2xl border flex items-center justify-between ${
                    item.rank === 3 ? 'bg-gold/10 border-gold' : 'bg-bg-card border-gold/20'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-6 font-black text-xs text-gold">#{item.rank}</span>
                    <span className="text-xs font-bold text-gray-200">{item.name}</span>
                  </div>
                  <span className="text-xs font-black text-gold">{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SCREEN 22: WITHDRAW HISTORY ================= */}
        {currentScreen === 'withdraw-history' && (
          <div className="space-y-4">
            <button 
              onClick={() => setCurrentScreen('wallet')}
              className="text-xs font-bold text-gold flex items-center mb-1"
            >
              <ChevronLeft size={16} /> Back to Wallet
            </button>

            <h2 className="text-lg font-black text-gray-100 flex items-center">
              <Clock size={20} className="text-gold mr-2" /> Withdrawal History
            </h2>

            <div className="space-y-2.5">
              {[
                { id: 'TX-9014', date: '2026-06-12', amount: '10,000 MJX', status: 'Completed', color: 'text-emerald-400' },
                { id: 'TX-8841', date: '2026-06-08', amount: '5,000 MJX', status: 'Completed', color: 'text-emerald-400' },
                { id: 'TX-8610', date: '2026-06-02', amount: '20,000 MJX', status: 'Pending', color: 'text-amber-400' },
              ].map((h, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-bg-card border border-gold/20 flex justify-between items-center">
                  <div>
                    <span className="text-xs font-bold text-gray-200 block">{h.id}</span>
                    <span className="text-[10px] text-gray-500">{h.date}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-gold block">{h.amount}</span>
                    <span className={`text-[10px] font-bold ${h.color}`}>{h.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ================= MODAL: BONUS CLAIMED ================= */}
      {showBonusModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-xs p-6 rounded-3xl bg-card-gradient border border-gold text-center space-y-4 shadow-2xl">
            <Sparkles size={48} className="text-gold mx-auto animate-bounce" />
            <h3 className="text-xl font-black gold-text">Bonus Claimed!</h3>
            <p className="text-xs text-gray-300">Your account has been credited with extra MJX coins!</p>
            <button 
              onClick={() => setShowBonusModal(false)}
              className="w-full py-3 rounded-xl bg-gold text-bg-darkest font-black text-xs"
            >
              Great, Continue!
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL: ERROR / OOPS ================= */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-xs p-6 rounded-3xl bg-card-gradient border border-rose-500/40 text-center space-y-4 shadow-2xl">
            <AlertCircle size={48} className="text-rose-500 mx-auto" />
            <h3 className="text-xl font-black text-rose-400">Oops!</h3>
            <p className="text-xs text-gray-300">Market moved against your prediction. Try again on next candle!</p>
            <button 
              onClick={() => setShowErrorModal(false)}
              className="w-full py-3 rounded-xl bg-rose-500 text-white font-black text-xs"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation Bar (Screens 5-16) */}
      {!['splash', 'onb1', 'onb2', 'onb3'].includes(currentScreen) && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-bg-card/95 backdrop-blur-md border-t border-gold/20 px-3 py-2 z-40">
          <div className="flex justify-around items-center">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'tasks', label: 'Tasks', icon: CheckSquare },
              { id: 'predict', label: 'Predict', icon: TrendingUp },
              { id: 'wallet', label: 'Wallet', icon: Wallet },
              { id: 'profile', label: 'Profile', icon: User },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => navigateTab(tab.id as any)}
                  className={`flex flex-col items-center py-1 px-3 rounded-xl transition-all ${
                    isActive ? 'text-gold scale-105 font-bold' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <tab.icon size={20} className={isActive ? 'stroke-[2.5]' : 'stroke-2'} />
                  <span className="text-[10px] mt-1">{tab.label}</span>
                  {isActive && <div className="w-1 h-1 rounded-full bg-gold mt-0.5" />}
                </button>
              );
            })}
          </div>
        </nav>
      )}

    </div>
  );
}

export default App;