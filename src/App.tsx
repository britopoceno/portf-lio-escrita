import React, { useState } from 'react';
import { ArrowRight, Brush, PenTool, Sparkles, GitMerge, Pencil, Radio, BookOpen, Film, Gamepad2, X, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen py-12 px-4 md:px-12 selection:bg-terracotta selection:text-white">
      <div className="max-w-6xl mx-auto space-y-12 relative">
        {/* Patchwork Panels Background */}
        <div className="patchwork-panel bg-cork w-96 h-96 top-0 -left-48 rotate-3 rounded-lg shadow-inner"></div>
        <div className="patchwork-panel bg-grid-paper w-[500px] h-[700px] bottom-0 -right-24 -rotate-2 rounded-sm shadow-inner"></div>

        <div className="space-y-4">
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-softgrey pb-6 gap-6">
            <div className="space-y-1">
              <h2 className="text-xl font-normal tracking-[0.3em] font-sans uppercase">Vágner Petit de Brito Tôrres</h2>
              <p className="italic text-base opacity-80">Portfólio de Escrita</p>
            </div>
            <nav className="flex gap-10 text-base font-sans tracking-widest uppercase">
              <a className="hover:text-terracotta transition-colors" href="https://www.linkedin.com/in/vagnerpetit/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="hover:text-terracotta transition-colors" href="https://clubberrural.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
              <a className="hover:text-terracotta transition-colors" href="mailto:vagnerbritot@gmail.com">Contato</a>
            </nav>
          </header>
          <div className="flex justify-end">
            <div className="pl-4 border-l border-terracotta/20 text-right max-w-xs">
              <p className="text-base italic leading-relaxed opacity-80">
                "Todo texto é um mapa, revela o território que o gerou e a pessoa que com ele interage."
              </p>
            </div>
          </div>
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <section className="lg:col-span-7 lg:-mt-20 space-y-12">
            <div className="paper-swatch irregular-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="pin"></div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight font-sans font-light uppercase tracking-widest">
                Escrita técnica e <br />
                <span className="accent-text italic font-serif normal-case tracking-normal">criativa</span>
              </h1>
              <div className="space-y-6 text-xl leading-relaxed max-w-2xl opacity-100">
                <p className="text-3xl md:text-4xl font-serif italic text-charcoal/80 leading-tight mb-8">
                  Escrevo a partir de onde os meus pés pisam.
                </p>
                <div className="space-y-6">
                  <p>
                    Cresci na zona rural do <strong>semiárido brasileiro</strong> um contexto onde a distância dos grandes centros é, além de tudo, simbólica. Essa experiência formou meu olhar sobre o que a escrita pode realizar.
                  </p>
                  <p>
                    O bacharelado em <strong>Direito</strong> aprofundou minha relação com o <strong>rigor formal</strong> e com a linguagem enquanto <strong>instrumento de disputa</strong>. Anos na <strong>gestão cultural</strong> confirmaram que textos bem construídos são <strong>dispositivos estratégicos</strong>.
                  </p>
                </div>
                <p className="italic opacity-80 border-t border-softgrey pt-6">
                  Escrevo porque acredito que narrativas bem construídas alteram o que é possível realizar em um território.
                </p>
              </div>

            </div>
          </section>

          <section className="lg:col-span-12 lg:hidden">
            {/* Mobile spacing adjustment */}
          </section>

          <section className="lg:col-span-5 space-y-12">
            <div className="paper-swatch irregular-2 p-8 bg-white/60">
              <div className="pin !bg-softgrey"></div>
              <h2 className="text-3xl mb-8 accent-text font-sans font-light uppercase tracking-widest">Habilidades de Escrita</h2>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-lg mb-4 flex items-center gap-3 font-sans uppercase tracking-widest">
                    <Brush className="w-4 h-4" />
                    Editorial & Curatorial
                  </h3>
                  <p className="text-base italic opacity-90">Ensaios sobre cultura, políticas públicas e território. Argumentação fundamentada e considerações próprias.</p>
                </div>
                <div className="group">
                  <h3 className="text-lg mb-4 flex items-center gap-3 font-sans uppercase tracking-widest">
                    <PenTool className="w-4 h-4" />
                    Roteiro & Storytelling
                  </h3>
                  <p className="text-base italic opacity-90">Estruturação dramática para documentários, roteiros de jogos e narrativas transmídia. Organizando o ponto de vista e a experiência do interlocutor.</p>
                </div>
                <div className="group">
                  <h3 className="text-lg mb-4 flex items-center gap-3 font-sans uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" />
                    Copywriting
                  </h3>
                  <p className="text-base italic opacity-90">Textos orientados a resultado para marcas, projetos e instituições. Campanhas, peças institucionais e comunicação estratégica e consistente.</p>
                </div>
              </div>
            </div>
            <motion.div
              layoutId="main-image"
              className="paper-swatch p-3 rotate-1 shadow-lg max-w-lg mx-auto cursor-zoom-in group relative"
              onClick={() => setIsExpanded(true)}
              whileHover={{ scale: 1.02, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <img
                alt="Pensamento sobre conexões e ativos acumuláveis"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                src="https://i.postimg.cc/VsjHJ4Bh/Mais-importante-que-quantas-coisas-voce-faz-e-saber-quais-conexoes-voce-consegue-produzir-entre-ela.png"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500"></div>
            </motion.div>
          </section>
        </main>

        <section id="arquivo" className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-light font-sans uppercase tracking-widest">Projetos</h2>
            <div className="h-[1px] flex-grow bg-softgrey"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Clubber Rural */}
            <div className="space-y-6 relative">
              <div className="tape tape-tl opacity-60"></div>
              <div className="paper-swatch rotate-1 p-2">
                <div className="pin"></div>
                <div className="w-full aspect-video bg-charcoal/5 overflow-hidden">
                  <img
                    src="https://i.postimg.cc/wv75hXP9/IMG-7983.jpg"
                    alt="Clubber Rural"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="px-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-sans font-light uppercase tracking-widest">Clubber Rural</h3>
                  <span className="text-xs font-sans px-2 py-1 bg-charcoal text-white uppercase tracking-widest">Newsletter</span>
                </div>
                <p className="text-base italic opacity-90 mb-4">
                  Newsletter sobre cultura, território e políticas públicas escrita a partir do semiárido brasileiro. Os ensaios partem de questões concretas da prática e da gestão cultural para construir análises estruturais, mobilizando referenciais teóricos e práticos para entender as condições materiais de quem produz fora dos grandes centros. O ponto de partida costuma ser empírico e o percurso é sempre o de qualificar o problema antes de propor qualquer saída.
                </p>
                <a
                  className="text-sm font-sans tracking-widest uppercase accent-text hover:underline"
                  href="https://clubberrural.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ler no Substack →
                </a>
              </div>
            </div>

            {/* Rádio Sarjeta */}
            <div className="space-y-6 md:mt-12 relative">
              <div className="tape tape-tr opacity-60"></div>
              <div className="paper-swatch -rotate-1 p-2">
                <div className="pin !bg-softgrey"></div>
                <div className="w-full aspect-video bg-charcoal/5 overflow-hidden">
                  <img
                    src="https://i.postimg.cc/bwpB159F/PERFIL-LINK-(1).png"
                    alt="Rádio Sarjeta"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="px-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-sans font-light uppercase tracking-widest">Rádio Sarjeta</h3>
                  <span className="text-xs font-sans px-2 py-1 border border-charcoal uppercase tracking-widest">Editorial e Copywriting</span>
                </div>
                <p className="text-base italic opacity-90 mb-4">
                  Responsável pela construção e manutenção da voz editorial da Rádio Sarjeta, Ponto de Cultura certificado pelo Ministério da Cultura. A atuação abrange a redação de roteiros, textos de apresentação, curadoria editorial e copy para Instagram e YouTube, assegurando consistência de narrativa em todos os pontos de contato da marca.
                </p>
                <div className="flex gap-4">
                  <a
                    className="text-sm font-sans tracking-widest uppercase accent-text hover:underline font-medium"
                    href="https://www.sarjeta.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Site Oficial →
                  </a>
                  <a
                    className="text-sm font-sans tracking-widest uppercase accent-text hover:underline"
                    href="https://www.instagram.com/radiosarjeta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram →
                  </a>
                  <a
                    className="text-sm font-sans tracking-widest uppercase accent-text hover:underline"
                    href="https://www.youtube.com/@R%C3%A1dioSarjeta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube →
                  </a>
                </div>
              </div>
            </div>

            {/* Documentário */}
            <div className="space-y-6 relative">
              <div className="tape tape-top opacity-60"></div>
              <div className="paper-swatch rotate-1 p-2">
                <div className="pin"></div>
                <div className="w-full aspect-video bg-charcoal/5 overflow-hidden">
                  <img
                    src="https://i.postimg.cc/fR7krVXw/imagem-2026-02-25-002313210.png"
                    alt="Descentralizando a arte"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="px-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-sans font-light uppercase tracking-widest">Descentralizando a arte</h3>
                  <span className="text-xs font-sans px-2 py-1 bg-charcoal text-white uppercase tracking-widest">Roteiro Doc.</span>
                </div>
                <p className="text-base italic opacity-90 mb-4">
                  Roteiro de narração e argumento do documentário produzido para o Banco do Nordeste Cultural sobre o primeiro ano do BNB Cultural no Rio Grande do Norte. O texto trabalha a voz em off como fio condutor dramático, construindo uma reflexão sobre descentralização cultural a partir de imagens e referências do território — onde a pergunta sobre o que é um centro se desdobra em resposta poética e política ao mesmo tempo.
                </p>
                <span className="text-sm font-sans tracking-widest uppercase opacity-40">Narração · Roteiro Estrutural · Argumento</span>
              </div>
            </div>

            {/* Cybersemiárida */}
            <div className="space-y-6 md:mt-12 relative">
              <div className="tape tape-tr opacity-60"></div>
              <div className="paper-swatch -rotate-1 p-2">
                <div className="pin !bg-softgrey"></div>
                <div className="w-full aspect-video bg-charcoal/5 overflow-hidden">
                  <img
                    src="https://cyber.apetit.studio/screen-1.png"
                    alt="Cybersemiárida Gameplay"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div className="px-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-sans font-light uppercase tracking-widest">Cybersemiárida</h3>
                  <span className="text-xs font-sans px-2 py-1 border border-charcoal uppercase tracking-widest">Jogo · Worldbuilding</span>
                </div>
                <p className="text-base italic opacity-90 mb-4">
                  Jogo desenvolvido pela Apetit Studios via Lei Paulo Gustavo. Num semiárido cyberpunk, Timby chega a uma cidade onde o Maestro proibiu a música — e a descobre como arma de resistência. Responsável pelo worldbuilding completo: enredo, diálogos, roteiro, cutscenes e lore das facções (Harmonistas, Dissidentes do Deserto, Vigilância Silenciosa, entre outras).
                </p>
                <div className="flex flex-col gap-4 mb-4">
                  <a
                    className="text-sm font-sans tracking-widest uppercase accent-text hover:underline font-medium"
                    href="https://cyber.apetit.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Site do Jogo →
                  </a>
                </div>
                <span className="text-sm font-sans tracking-widest uppercase opacity-40">Enredo · Diálogos · Roteiro · Lore · Cutscenes</span>
              </div>
            </div>

          </div>
        </section>

        {/* Exemplo de Escrita - Poético */}
        <section className="mt-24 max-w-4xl mx-auto pb-12 border-b border-softgrey relative">
          <div className="tape tape-tl !w-24 rotate-12 opacity-40"></div>
          <div className="paper-swatch p-12 md:p-20 bg-white rotate-1 shadow-xl relative">
            <div className="pin !bg-terracotta/30 scale-150"></div>

            <div className="space-y-12">
              <div className="flex items-center gap-6 opacity-30">
                <div className="h-px flex-1 bg-charcoal"></div>
                <span className="text-xs font-sans uppercase tracking-[0.5em]">Fragmento de Narração</span>
                <div className="h-px flex-1 bg-charcoal"></div>
              </div>

              <blockquote className="space-y-8 text-xl md:text-2xl font-serif italic leading-relaxed accent-text-dark">
                <p>
                  "O que é um centro?<br />
                  É o ponto para onde tudo converge, ou o lugar de onde tudo parte?<br />
                  Talvez não seja um ponto fixo, mas algo que se move conforme o olhar.<br />
                  O que é o centro, quando ele deixa de ser um lugar?
                </p>

                <p>
                  Talvez o centro possa ser um ajuntamento de vontades, uma mesa<br />
                  posta no meio da praça onde o gesto de reunir é tão importante quanto<br />
                  o lugar da reunião.
                </p>

                <p>
                  Costuma-se dizer que o interior resiste. Resiste, de fato. Entretanto,<br />
                  resistir é só o começo; o que move é o criar!
                </p>

                <p>
                  No interior, perto da manhã, na boca do sol,<br />
                  longe da casa que a fome mora,<br />
                  a ideia de centro se descentraliza e<br />
                  acaba estendendo uma rede.
                </p>

                <p>
                  Esta rede tem seus punhos puxados por muita gente.<br />
                  Outros tantos confeccionam as varandas que a ornam.<br />
                  É nesse tanto de mãos que ela passa a existir.<br />
                  O que mantém o seu balançar é a troca.
                </p>

                <p>
                  Uma história que passou e deixou rastro e<br />
                  o desejo de outra que ainda vai nascer.<br />
                  Ali no alpendre a conversa continua,<br />
                  E a esperança, sem alarde,<br />
                  Anuncia que vai ter inverno."
                </p>
              </blockquote>

              <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-t border-softgrey pt-12">
                <div className="space-y-2">
                  <p className="text-sm font-sans uppercase tracking-widest font-bold text-charcoal">Vágner Brito</p>
                  <p className="text-xs font-sans uppercase tracking-widest opacity-50">Texto de Narração do Documentário “Descentralizando a arte"</p>
                </div>
                <Quote size={48} className="opacity-20 text-terracotta" />
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 pb-12">
          <div className="paper-swatch irregular-2 p-12 bg-cream/40 relative overflow-hidden">
            <div className="pin !bg-terracotta/40"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-6 space-y-8">
                <h3 className="text-xl tracking-[0.3em] font-sans uppercase font-light">Vamos conversar?</h3>
                <div className="space-y-4">
                  <a href="mailto:vagnerbritot@gmail.com" className="block text-3xl font-serif italic hover:text-terracotta transition-colors underline decoration-terracotta/20 underline-offset-8">
                    vagnerbritot@gmail.com
                  </a>
                  <p className="text-base opacity-70 max-w-sm italic">
                    Disponível para projetos de escrita técnica, criativa, estratégica, editorial, curatorial ou copywriting.
                  </p>
                </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                <h4 className="text-xs tracking-widest uppercase font-sans opacity-50">Redes & Projetos</h4>
                <nav className="flex flex-col gap-3 text-sm font-sans uppercase tracking-[0.1em]">
                  <a className="hover:text-terracotta transition-colors" href="https://clubberrural.substack.com" target="_blank" rel="noopener noreferrer">Substack</a>
                  <a className="hover:text-terracotta transition-colors" href="https://www.linkedin.com/in/vagnerpetit/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </nav>
              </div>

              <div className="md:col-span-3 text-right space-y-4">
                <div className="text-[10px] font-sans tracking-[0.2em] uppercase opacity-40 leading-relaxed">
                  <p>Est. 2026 — Portfólio de Escrita</p>
                  <p>Narrativa · Roteiro · Worldbuilding</p>
                  <p>© Todos os Direitos Reservados</p>
                </div>
              </div>
            </div>

          </div>
        </footer>
      </div>


      {/* Lightbox Overlay */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-linen/90 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
            onClick={() => setIsExpanded(false)}
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 right-6 md:top-12 md:right-12 text-charcoal hover:text-terracotta transition-colors p-3 bg-cream/50 rounded-full backdrop-blur-sm shadow-sm z-[60]"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
            >
              <X size={32} />
            </motion.button>
            <motion.div
              layoutId="main-image"
              className="relative w-full max-w-5xl h-full flex items-center justify-center"
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div className="paper-swatch p-2 md:p-4 shadow-2xl overflow-hidden flex items-center justify-center max-h-full max-w-full">
                <img
                  alt="Pensamento expandido"
                  className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
                  src="https://i.postimg.cc/VsjHJ4Bh/Mais-importante-que-quantas-coisas-voce-faz-e-saber-quais-conexoes-voce-consegue-produzir-entre-ela.png"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
