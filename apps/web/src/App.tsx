import React, { useState } from 'react';
import { 
  Home, 
  CheckSquare, 
  TrendingUp, 
  Wallet, 
  User, 
  Play, 
  Gift, 
  Users, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Bell, 
  Flame, 
  ChevronRight, 
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'tasks' | 'trading' | 'wallet' | 'profile'>('home');
  const [balance, setBalance] = useState(12480);
  const [usdValue, setUsdValue] = useState(12.48);

  return (
    <div className="min-h-screen bg-[#07090e] text-white flex justify-center selection:bg-amber-500 selection:text-black">
      {/* Mobile Container */}
      <div className="w-full max-w-md min-h-screen bg-[#0d111a] flex flex-col justify-between relative shadow-2xl border-x border-amber-500/10 pb-20">
        
        {/* Top Header */}
        <header className="px-5 pt-6 pb-4 flex items-center justify-between border-b border-white/5 bg-[#0d111a]/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-amber-500/40 p-0.5 bg-gradient-to-tr from-amber-600 to-yellow-300">
              <div className="w-full h-full rounded-full bg-[#141923] flex items-center justify-center font-black text-amber-400 text-lg">
                M
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg tracking-wider gold-gradient-text">MAJIX</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">PRO</span>
              </div>
              <p className="text-[11px] text-gray-400 font-medium">Earn • Predict • Win</p>
            </div>
          </div>
          
          <button className="w-10 h-10 rounded-xl bg-[#171d2a] border border-white/10 flex items-center justify-center text-gray-300 hover:text-amber-400 transition-colors relative">
            <Bell size={18} />
            <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-2.5 right-2.5"></span>
          </button>
        </header>

        {/* Dynamic Screen Content */}
        <main className="flex-1 p-5 space-y-6">
          
          {/* SCREEN: HOME */}
          {activeTab === 'home' && (
            <>
              {/* Balance Card */}
              <div className="gold-card p-6 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-gray-400 tracking-wider uppercase">موجودی کل / Balance</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold flex items-center gap-1">
                    <Zap size={12} /> سطح ۵
                  </span>
                </div>
                
                <div className="flex items-baseline gap-2 mb-1">
                  <h1 className="text-3xl font-black text-white">{balance.toLocaleString()}</h1>
                  <span className="text-amber-400 font-bold text-sm">MJX</span>
                </div>
                <p className="text-xs text-gray-400 font-medium mb-6">≈ ${usdValue.toFixed(2)} USD</p>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="gold-btn py-3 px-4 rounded-xl text-black font-extrabold text-sm flex items-center justify-center gap-2">
                    <ArrowDownLeft size={18} /> واریز (Deposit)
                  </button>
                  <button className="bg-[#1a2232] hover:bg-[#202b3f] border border-white/10 py-3 px-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors">
                    <ArrowUpRight size={18} /> برداشت (Withdraw)
                  </button>
                </div>
              </div>

              {/* Daily Streak Banner */}
              <div className="bg-gradient-to-r from-amber-500/20 via-[#1c2436] to-[#141a27] border border-amber-500/30 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl text-amber-400">
                    <Flame size={22} className="fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-white">استریک روزانه شما</h4>
                    <p className="text-[11px] text-gray-400">۳ روز مداوم فعال بودید! پاداش بعدی: +50 MJX</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-amber-400" />
              </div>

              {/* Main Feature Cards Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                <div 
                  onClick={() => setActiveTab('tasks')}
                  className="bg-[#141b28] hover:border-amber-500/50 border border-white/5 p-4 rounded-2xl cursor-pointer transition-all hover:-translate-y-0.5 flex flex-col justify-between h-32"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Play size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">تماشای ویدیو</h3>
                    <p className="text-[11px] text-amber-400/90 font-medium">+150 MJX پاداش</p>
                  </div>
                </div>

                <div 
                  onClick={() => setActiveTab('tasks')}
                  className="bg-[#141b28] hover:border-amber-500/50 border border-white/5 p-4 rounded-2xl cursor-pointer transition-all hover:-translate-y-0.5 flex flex-col justify-between h-32"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Gift size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">بونوس روزانه</h3>
                    <p className="text-[11px] text-amber-400/90 font-medium">دریافت هدیه رایگان</p>
                  </div>
                </div>

                <div 
                  onClick={() => setActiveTab('trading')}
                  className="bg-[#141b28] hover:border-amber-500/50 border border-white/5 p-4 rounded-2xl cursor-pointer transition-all hover:-translate-y-0.5 flex flex-col justify-between h-32"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">باینری تریدینگ</h3>
                    <p className="text-[11px] text-emerald-400 font-medium">پیش‌بینی روند چارت</p>
                  </div>
                </div>

                <div 
                  className="bg-[#141b28] hover:border-amber-500/50 border border-white/5 p-4 rounded-2xl cursor-pointer transition-all hover:-translate-y-0.5 flex flex-col justify-between h-32"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">دعوت دوستان</h3>
                    <p className="text-[11px] text-amber-400/90 font-medium">+500 MJX به ازای هر نفر</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* SCREEN: TRADING */}
          {activeTab === 'trading' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-[#141b28] p-3 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">₿</div>
                  <span className="font-bold text-sm">BTC/USDT</span>
                </div>
                <span className="text-emerald-400 font-extrabold text-sm">+2.48%</span>
              </div>

              {/* Chart Placeholder */}
              <div className="h-56 bg-[#090d15] rounded-3xl border border-white/5 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="text-gray-500 text-xs font-mono">LIVE CANDLESTICK SIMULATOR</div>
                <div className="w-full h-24 flex items-end justify-around px-4 gap-1 mt-4">
                  <div className="w-3 bg-emerald-500/40 h-16 rounded-t"></div>
                  <div className="w-3 bg-rose-500/40 h-10 rounded-t"></div>
                  <div className="w-3 bg-emerald-500/70 h-24 rounded-t"></div>
                  <div className="w-3 bg-emerald-500 h-32 rounded-t"></div>
                  <div className="w-3 bg-rose-500/70 h-14 rounded-t"></div>
                  <div className="w-3 bg-emerald-500 h-20 rounded-t"></div>
                </div>
              </div>

              {/* Trading Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3.5 rounded-2xl shadow-lg shadow-emerald-600/20 active:scale-95 transition-all">
                  UP (صعود)
                </button>
                <button className="bg-rose-600 hover:bg-rose-500 text-white font-black py-3.5 rounded-2xl shadow-lg shadow-rose-600/20 active:scale-95 transition-all">
                  DOWN (نزول)
                </button>
              </div>
            </div>
          )}

          {/* SCREEN: TASKS */}
          {activeTab === 'tasks' && (
            <div className="space-y-3">
              <h2 className="font-black text-lg text-amber-400">تسک‌های فعال</h2>
              {[
                { title: 'عضویت در کانال تلگرام', reward: '+150 MJX', tag: 'Social' },
                { title: 'فالو کردن توییتر/X', reward: '+200 MJX', tag: 'Social' },
                { title: 'مشاهده ویدیوی یوتیوب تحلیل', reward: '+300 MJX', tag: 'Video' },
              ].map((task, idx) => (
                <div key={idx} className="bg-[#141b28] border border-white/5 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-400">{task.tag}</span>
                    <h4 className="font-bold text-sm text-white mt-1">{task.title}</h4>
                    <span className="text-amber-400 font-bold text-xs">{task.reward}</span>
                  </div>
                  <button className="gold-btn text-black text-xs font-extrabold px-4 py-2 rounded-xl">
                    انجام
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* SCREEN: WALLET */}
          {activeTab === 'wallet' && (
            <div className="space-y-4">
              <div className="gold-card p-5 rounded-3xl">
                <p className="text-xs text-gray-400 mb-1">آدرس ولت متصل شده</p>
                <div className="bg-black/40 p-3 rounded-xl border border-white/10 font-mono text-xs text-amber-400 truncate">
                  0x71C...8942bF52
                </div>
              </div>
              <button className="w-full gold-btn py-3.5 rounded-2xl text-black font-extrabold">
                اتصال کیف پول جدید (Connect Wallet)
              </button>
            </div>
          )}

          {/* SCREEN: PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="bg-[#141b28] p-5 rounded-3xl border border-white/5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center font-black text-black text-2xl">
                  M
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Majid (Majix)</h3>
                  <p className="text-xs text-amber-400 font-mono">UID: 9842103</p>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* Bottom Navigation Bar */}
        <nav className="absolute bottom-0 left-0 right-0 bg-[#0d111a]/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 z-40">
          <div className="flex justify-around items-center">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-amber-400' : 'text-gray-400 hover:text-white'}`}
            >
              <Home size={20} />
              <span className="text-[10px] font-semibold">خانه</span>
            </button>

            <button 
              onClick={() => setActiveTab('tasks')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'tasks' ? 'text-amber-400' : 'text-gray-400 hover:text-white'}`}
            >
              <CheckSquare size={20} />
              <span className="text-[10px] font-semibold">تسک‌ها</span>
            </button>

            <button 
              onClick={() => setActiveTab('trading')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'trading' ? 'text-amber-400' : 'text-gray-400 hover:text-white'}`}
            >
              <TrendingUp size={20} />
              <span className="text-[10px] font-semibold">تریدینگ</span>
            </button>

            <button 
              onClick={() => setActiveTab('wallet')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'wallet' ? 'text-amber-400' : 'text-gray-400 hover:text-white'}`}
            >
              <Wallet size={20} />
              <span className="text-[10px] font-semibold">کیف پول</span>
            </button>

            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'profile' ? 'text-amber-400' : 'text-gray-400 hover:text-white'}`}
            >
              <User size={20} />
              <span className="text-[10px] font-semibold">پروفایل</span>
            </button>
          </div>
        </nav>

      </div>
    </div>
  );
}
