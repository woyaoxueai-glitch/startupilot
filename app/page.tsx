'use client';

import { useRef, useState } from 'react';
import Image from 'next/image'; 
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Rocket, Zap, ChevronRight, Lock, Globe, X } from 'lucide-react';

// 动画变体
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function StartupilotHome() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // 控制弹窗状态 (null = 关闭, 'join' = 显示入群码, 'info' = 显示介绍码)
  const [activeQR, setActiveQR] = useState<null | 'join' | 'info'>(null);

  // 关闭弹窗函数
  const closeQR = () => setActiveQR(null);

  return (
    <main className="min-h-screen bg-white text-[#1d1d1f] selection:bg-[#0071e3] selection:text-white overflow-x-hidden">
      
      {/* === 1. 顶部导航 === */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          
          <div className="flex items-center cursor-pointer hover:opacity-70 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="Startupilot Logo"
              width={140}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </div>

          <div className="hidden md:flex gap-6 text-[12px] font-medium text-gray-500">
            <a href="#vision" className="hover:text-[#0071e3] transition-colors">愿景</a>
            <a href="#timeline" className="hover:text-[#0071e3] transition-colors">历史进程</a>
            <a href="#features" className="hover:text-[#0071e3] transition-colors">赋能体系</a>
          </div>

          <button 
            onClick={() => setActiveQR('join')}
            className="bg-[#1d1d1f] text-white text-[10px] px-3 py-1 rounded-full hover:bg-[#0071e3] transition-colors duration-300"
          >
            加入我们
          </button>
        </div>
      </nav>

      {/* === 2. Hero 区域 === */}
      <section id="vision" className="relative pt-48 pb-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full hover:border-[#0071e3]/30 transition-colors cursor-pointer group">
            <span className="text-[#0071e3] text-[10px] font-bold tracking-wider uppercase">New Era</span>
            <span className="text-gray-500 text-[10px] group-hover:text-gray-800 transition-colors">一人无限公司时代已来</span>
            <ChevronRight className="w-3 h-3 text-gray-400 group-hover:text-[#0071e3]" />
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-[#1d1d1f] leading-[1.1]">
            Startupilot
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-gray-400 mb-10 max-w-4xl mx-auto leading-tight">
            在 AI 应用层时代，<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] to-[#2997ff]">
              每个人都有一次成功的机会。
            </span>
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
            <button 
              onClick={() => setActiveQR('join')}
              className="bg-[#0071e3] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[#0077ED] transition-colors shadow-lg shadow-blue-500/20"
            >
              开启事业加速
            </button>
            
            <button 
              onClick={() => setActiveQR('info')}
              className="text-[#0071e3] px-8 py-3 text-base font-medium hover:underline underline-offset-4 flex items-center justify-center gap-1"
            >
              了解赋能体系 <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* === 3. 历史进程 === */}
      <section id="timeline" className="bg-[#f5f5f7] py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="mb-20">
            <h2 className="text-4xl font-bold mb-4">时代的进程</h2>
            <p className="text-gray-500">每一次生产力的跃迁，都伴随着组织形式的重构。</p>
          </motion.div>

          <div className="space-y-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden">
            {/* 1913 */}
            <motion.div 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.8)" }}
              className="bg-white p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start transition-colors duration-300"
            >
              <div className="w-24 md:w-32 flex-shrink-0 text-[#0071e3] font-bold text-xl font-mono pt-1">1913</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">效率革命 · 福特流水线</h3>
                <p className="text-gray-500 leading-relaxed">
                  亨利·福特（Henry Ford）在海兰德公园工厂（Highland Park Plant）将T型车装配时间从12小时缩短至93分钟。彻底改变了制造业的模式……
                </p>
              </div>
            </motion.div>

            {/* 1976 */}
            <motion.div 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.8)" }}
              className="bg-white p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start transition-colors duration-300"
            >
              <div className="w-24 md:w-32 flex-shrink-0 text-[#0071e3] font-bold text-xl font-mono pt-1">1976</div>
              <div>
                <h3 className="text-2xl font-bold mb-2">车库传奇 · 乔布斯与Apple I</h3>
                <p className="text-gray-500 leading-relaxed">
                史蒂夫•乔布斯（Steve Jobs）和联合创始人在洛斯阿图斯斯（Los AItos）的车库里制造和组装了世界上最早商业化的个人电脑之———Apple I，使得小团队创造巨大商业价值成为可能……
                </p>
              </div>
            </motion.div>

            {/* 2025 */}
            <motion.div 
               whileHover={{ backgroundColor: "rgba(255,255,255,0.8)" }}
               className="bg-white p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
              <div className="w-24 md:w-32 flex-shrink-0 text-[#0071e3] font-bold text-xl font-mono pt-1 relative z-10">NOW</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">一人公司</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  今天，你在Startupilot的社群里，你就是一家公司。成为了“一人独角兽”（One-Person Unicorn）时代的最佳证明！
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-semibold bg-black text-white px-3 py-1 rounded">
                   <Rocket className="w-3 h-3" />
                   ONE-PERSON UNICORN
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 4. 赋能体系 === */}
      <section id="features" className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">打破玻璃天花板</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">除了行业 Know-how，你还需要属于你自己的私人智库与资源链接。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
            {/* Box 1 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#f5f5f7] p-10 rounded-[40px] flex flex-col justify-between h-full group"
            >
               <div>
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <Zap className="w-6 h-6 text-[#0071e3]" />
                 </div>
                 <h3 className="text-2xl font-bold mb-3">顶级商业分析</h3>
                 <p className="text-gray-500">曾经只在顶级商学院才被教授的商业分析与管理工具。</p>
               </div>
               <div className="font-mono text-gray-300">01 / THINKING</div>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#1d1d1f] p-10 rounded-[40px] flex flex-col justify-between h-full text-white shadow-2xl relative overflow-hidden"
            >
               <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/10 rounded-full" />
               <div className="absolute -top-10 -right-10 w-64 h-64 border border-white/5 rounded-full" />
               <div className="relative z-10">
                 <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="text-2xl font-bold mb-3">稀缺资源链接</h3>
                 <p className="text-gray-400">打破电梯偶遇的概率。直接链接风险投资人、机构与潜在合伙人。</p>
               </div>
               <div className="mt-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                     <div>
                        <div className="text-sm font-bold">Founder Square</div>
                        <div className="text-[10px] text-gray-400">Link Potential into Success</div>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#f5f5f7] p-10 rounded-[40px] flex flex-col justify-between h-full"
            >
               <div>
                 <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <Lock className="w-6 h-6 text-[#0071e3]" />
                 </div>
                 <h3 className="text-2xl font-bold mb-3">闭门分享</h3>
                 <p className="text-gray-500">获取极高门槛的闭门会谈与内部增长策略分享。拒绝噪音。</p>
               </div>
               <div className="font-mono text-gray-300">03 / INSIGHT</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === 5. 页脚 (已添加公安联网备案) === */}
      <footer className="bg-white pt-20 pb-10 px-6 border-t border-gray-100">
         <div className="max-w-5xl mx-auto text-center">
            
            <div className="flex items-center justify-center mb-6">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              />
            </div>

            <p className="text-gray-500 max-w-md mx-auto mb-12 text-sm">
              一人无限公司的赋能社群。<br/>将潜力转化为必然的成功。
            </p>
            
            <div className="h-px bg-gray-100 w-full mb-10" />
            
            {/* 版权 & 备案信息行 */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 text-xs text-gray-400 font-sans">
               <span>©2025 元核智策（上海）企业管理有限公司</span>
               
               <span className="hidden md:inline text-gray-300">|</span>
               
               {/* ICP 备案 */}
               <a 
                 href="https://beian.miit.gov.cn/" 
                 target="_blank" 
                 rel="noreferrer"
                 className="hover:text-[#0071e3] transition-colors"
               >
                 沪ICP备2025149898号-3
               </a>

               <span className="hidden md:inline text-gray-300">|</span>

               {/* 公安联网备案 (新增) */}
               <a 
                  href="https://beian.mps.gov.cn/#/query/webSearch?code=31010402336190" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1 hover:text-[#0071e3] transition-colors"
               >
                 {/* 确保 public 下有 beian.png */}
                 <img src="/beian.png" alt="备案图标" className="w-4 h-4" />
                 <span>沪公网安备31010402336190号</span>
               </a>

            </div>

         </div>
      </footer>

      {/* === 🚀 弹窗组件 === */}
      <AnimatePresence>
        {activeQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          >
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
              onClick={closeQR}
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white rounded-[24px] p-6 shadow-2xl relative w-full max-w-sm mx-auto z-10"
            >
              <button 
                onClick={closeQR}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors bg-gray-100 rounded-full p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-[#0071e3]" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">
                  {activeQR === 'join' ? '扫码加入社群' : '了解详细体系'}
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  {activeQR === 'join' 
                    ? '与数百位一人公司创业者共同成长' 
                    : '添加顾问微信，获取详细介绍资料'}
                </p>

                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 inline-block">
                  <Image 
                    src={activeQR === 'join' ? "/qr-1.png" : "/qr-2.png"}
                    alt="QR Code"
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain rounded-lg"
                  />
                </div>
                
                <p className="text-xs text-gray-400 mt-4">
                  长按识别 或 截图扫码
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}