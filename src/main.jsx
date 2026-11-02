import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const developer = import.meta.env.VITE_DEVELOPER_NAME?.trim() || 'HLC Software'
const privacyEmail = import.meta.env.VITE_PRIVACY_EMAIL?.trim() || 'contact@henriquecavalcante.com'
const playUrl = import.meta.env.VITE_PLAY_STORE_URL?.trim()
const validPlayUrl = /^https:\/\/play\.google\.com\/store\/apps\/details\?/i.test(playUrl || '')
const year = new Date().getFullYear()

function Brand() {
  return <a className="brand" href="/" aria-label="The Eye — início"><img src="/branding/logo.svg" alt="" /><span>THE EYE<span className="brand-dot">.</span></span></a>
}

function Header({ legal = false }) {
  return <header className="site-header"><div className="container header-inner">
    <Brand />
    <nav aria-label="Navegação principal">
      <a href={legal ? '/#como-funciona' : '#como-funciona'}>Como funciona</a>
      <a href={legal ? '/#limites' : '#limites'}>O que esperar</a>
      <a className="nav-cta" href={legal ? '/' : '#explorar'}>{legal ? 'Voltar ao início' : 'Explorar o app'} <span aria-hidden="true">↗</span></a>
    </nav>
  </div></header>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-grid">
    <div><Brand /><p>Observe. Entenda. Verifique.</p><small>© {year} The Eye. Todos os direitos reservados.</small></div>
    <div className="footer-links"><a href="/privacidade/">Política de Privacidade</a><a href="/termos/">Termos de Uso</a>{privacyEmail && <a href={`mailto:${privacyEmail}`}>Contato</a>}</div>
  </div></footer>
}

function ArrowIcon() { return <span aria-hidden="true">↗</span> }

function StoreAction({ secondary = false }) {
  return validPlayUrl
    ? <a className={secondary ? 'button button-outline' : 'button button-primary'} href={playUrl} target="_blank" rel="noopener noreferrer">Baixar na Google Play <ArrowIcon /></a>
    : <span className={secondary ? 'button button-outline button-static' : 'button button-primary button-static'} aria-label="Lançamento para Android em breve">Em breve para Android <span aria-hidden="true">✦</span></span>
}

function Phone() {
  return <div className="phone-scene" aria-label="Prévia ilustrativa da experiência The Eye">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="float-tag tag-top"><span className="tag-icon">◈</span><span>INSPEÇÃO GUIADA<br /><strong>Passo a passo</strong></span></div>
    <div className="phone"><div className="phone-island" /><div className="screen">
      <div className="screen-top"><span>9:41</span><span>●●● ▰</span></div>
      <div className="screen-brand"><img src="/branding/logo.svg" alt="" /><span>THE EYE</span></div>
      <div className="screen-eye"><div className="eye-ring"><img src="/branding/logo.svg" alt="" /></div></div>
      <p className="screen-kicker">SUA HOSPEDAGEM, COM MAIS CONTEXTO</p>
      <h3>Observe.<br />Entenda.<br /><em>Verifique.</em></h3>
      <div className="screen-button">Verificar ambiente <span>↗</span></div>
      <div className="screen-line"><span className="status-dot" /> INDÍCIOS, NÃO GARANTIAS</div>
    </div></div>
    <div className="float-tag tag-bottom"><span className="tag-icon">⌁</span><span>VERIFICAÇÃO LOCAL<br /><strong>Bluetooth · Wi-Fi · LAN</strong></span></div>
  </div>
}

function Home() {
  return <><Header /><main>
    <section className="hero"><div className="hero-glow" /><div className="container hero-grid">
      <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> UM NOVO OLHAR SOBRE SUA HOSPEDAGEM</div>
        <h1>Chegou.<br />Respirou.<br /><em>Agora, observe.</em></h1>
        <p className="hero-lead">Uma dúvida sobre privacidade não precisa virar pânico. O The Eye ajuda você a investigar indícios digitais e observar sua hospedagem com mais clareza.</p>
        <div className="hero-actions"><a className="button button-primary" href="#como-funciona">Descubra como funciona <ArrowIcon /></a><a className="text-link" href="#limites">Entenda os limites <span aria-hidden="true">↓</span></a></div>
        <div className="hero-proof"><span className="proof-mark">✳</span><span>Para quem se hospeda em hotéis, aluguéis de temporada e novos espaços.</span></div>
      </div>
      <Phone />
    </div></section>

    <section className="statement"><div className="container statement-inner"><span className="section-index">01 / A IDEIA</span><p>Nem toda dúvida precisa de uma resposta definitiva.<br /><strong>Às vezes, ela precisa de um próximo passo melhor.</strong></p></div></section>

    <section className="steps section-pad" id="como-funciona"><div className="container">
      <div className="section-heading"><div><span className="section-index">02 / COMO FUNCIONA</span><h2>Mais contexto.<br /><em>Menos suposições.</em></h2></div><p>Uma investigação guiada, do sinal digital à observação do ambiente.</p></div>
      <div className="step-grid">
        <article className="step-card"><span className="step-number">01</span><div className="step-symbol">⌁</div><h3>Escolha as fontes</h3><p>Selecione Bluetooth, redes Wi-Fi próximas e rede local conectada. Autorize a rede antes da verificação local.</p></article>
        <article className="step-card"><span className="step-number">02</span><div className="step-symbol">◉</div><h3>Entenda os indícios</h3><p>Veja o que foi observado, de onde veio cada pista e quais fontes não puderam ser verificadas.</p></article>
        <article className="step-card"><span className="step-number">03</span><div className="step-symbol">✳</div><h3>Inspecione com calma</h3><p>Use o checklist de inspeção óptica guiada para olhar o espaço, sem desmontar nada.</p></article>
      </div>
    </div></section>

    <section className="limits section-pad" id="limites"><div className="container limits-grid"><div><span className="section-index">03 / TRANSPARÊNCIA</span><h2>Um sinal é uma pista.<br /><em>Não uma sentença.</em></h2><p>O The Eye mostra indícios e limites da verificação. Um dispositivo anunciado pode ser legítimo; uma câmera fora do alcance pode não aparecer.</p><a className="inline-arrow" href="/privacidade/">Como cuidamos dos seus dados <ArrowIcon /></a></div><div className="limits-panel"><div className="panel-top"><span className="panel-pulse" /> NOSSO COMPROMISSO</div><div className="limit-row"><span>01</span><p>Sem promessas de encontrar todas as câmeras.</p></div><div className="limit-row"><span>02</span><p>Sem acessar vídeos ou invadir dispositivos.</p></div><div className="limit-row"><span>03</span><p>Resultados da sessão mantidos no aparelho enquanto o app está aberto.</p></div></div></div></section>

    <section className="cta-section" id="explorar"><div className="container cta-inner"><div className="cta-eye"><img src="/branding/logo.svg" alt="" /></div><span className="section-index">O PRÓXIMO PASSO É SEU</span><h2>Viaje com atenção.<br /><em>Fique com o contexto.</em></h2><p>O The Eye foi feito para ajudar você a observar melhor, sem transformar suspeitas em certezas.</p><StoreAction /><small>Disponibilidade para Android. Resultados não confirmam câmeras escondidas nem certificam a segurança do ambiente.</small></div></section>
  </main><Footer /></>
}

function Contact() {
  return <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
}

const privacySections = [
  { title: '1. Quem é responsável', body: <><p>Esta política se aplica ao aplicativo móvel The Eye e ao site de divulgação. O responsável pela publicação é {developer || <strong className="pending">o desenvolvedor a identificar antes da publicação</strong>}. Para dúvidas sobre privacidade: <Contact />.</p></> },
  { title: '2. Dados acessados pelo aplicativo', body: <><p>Na versão atual para Android, o The Eye acessa, mediante as permissões e escolhas aplicáveis, anúncios Bluetooth de dispositivos próximos, informações de pontos de acesso Wi-Fi próximos e respostas de descoberta de serviços na rede local Wi-Fi conectada que você autorizar. Esses dados podem incluir identificadores de rádio ou rede, nomes anunciados, fabricante, intensidade aproximada de sinal, tipos de serviço e horários da observação. Algumas permissões de localização precisa são exigidas pelo Android para buscas Wi-Fi e Bluetooth; o aplicativo não consulta coordenadas GPS para sua funcionalidade.</p><p>O app usa essas informações para mostrar indícios, origem e limitações da verificação. Não acessa vídeo de dispositivos encontrados, não tenta senhas e não vasculha redes externas.</p></> },
  { title: '3. Armazenamento, envio e compartilhamento', body: <><p>Os resultados de uma sessão ficam apenas na memória do aparelho durante o uso e são descartados ao fechar o app ou ao apagá-los na interface. A escolha de concluir a apresentação inicial é guardada localmente no aparelho para não repetir o onboarding. O aplicativo atual não tem conta, backend, publicidade, analytics ou SDK de telemetria, e não envia os resultados de verificação ao desenvolvedor.</p><p>A descoberta de rede local envia consultas à própria rede Wi-Fi autorizada e recebe respostas de dispositivos nessa rede. O Android pode processar permissões e sinais conforme seus serviços de sistema. O site não usa formulário, cookies de análise ou rastreadores adicionados por este projeto; a hospedagem escolhida pode registrar dados técnicos de acesso, como endereço IP, conforme sua própria política.</p></> },
  { title: '4. Permissões e escolhas', body: <><p>As fontes de Bluetooth, Wi-Fi e rede local dependem da versão do Android, dos recursos do aparelho e de permissões como Bluetooth, localização precisa, estado do Wi-Fi e acesso à rede local. Você pode desmarcar fontes e seguir com cobertura parcial. Também pode revogar permissões nos ajustes do Android. Sem uma permissão, a respectiva fonte pode ficar indisponível.</p></> },
  { title: '5. Retenção e exclusão', body: <><p>O The Eye não mantém cópia dos resultados em servidor. Você pode apagar a sessão na interface ou fechar o aplicativo para descartar os resultados em memória. Pode remover a preferência local de onboarding apagando os dados do aplicativo ou desinstalando-o. A versão atual não oferece criação de conta, portanto não há conta associada a excluir.</p></> },
  { title: '6. Segurança e alterações', body: <><p>O processamento dos resultados ocorre no aparelho. As consultas de descoberta ficam restritas à rede local Wi-Fi autorizada; nenhuma conexão com dispositivos é usada para acessar conteúdo de vídeo. Esta política pode ser atualizada quando os recursos ou o tratamento de dados mudarem. A data abaixo indica a versão deste texto.</p></> },
]

const termsSections = [
  { title: '1. Finalidade do The Eye', body: <p>O The Eye auxilia a investigação de indícios digitais e oferece uma inspeção visual guiada para pessoas em hotéis, aluguéis de temporada e outros espaços. O aplicativo não confirma a existência, posição, intenção ou propriedade de uma câmera escondida e não certifica a segurança de um ambiente.</p> },
  { title: '2. Como usar', body: <p>Use a verificação da rede local apenas em redes às quais você tem acesso e autorização. Respeite a privacidade de outras pessoas e as regras da hospedagem. O aplicativo não deve ser usado para invadir dispositivos, acessar gravações ou tentar credenciais.</p> },
  { title: '3. Limitações dos resultados', body: <p>Os indícios dependem das permissões, dos recursos do aparelho e da visibilidade da rede. Uma câmera desligada, fora da rede, em outra rede ou gravando localmente pode não aparecer. Um dispositivo legítimo pode anunciar serviços semelhantes aos de vídeo. Sinais Bluetooth e Wi-Fi não apontam a localização exata de um objeto.</p> },
  { title: '4. Sua decisão', body: <p>Os resultados servem como apoio para uma observação responsável. Se você estiver preocupado com sua segurança, procure a administração da hospedagem ou as autoridades competentes, conforme a situação. Não desmonte equipamentos ou instalações com base apenas no aplicativo.</p> },
  { title: '5. Privacidade e mudanças', body: <p>O tratamento de dados está descrito na <a href="/privacidade/">Política de Privacidade</a>. Os recursos e estes termos podem mudar; a versão publicada aqui deve acompanhar o aplicativo disponibilizado. Para contato: <Contact />.</p> },
]

function Legal({ kind }) {
  const privacy = kind === 'privacy'
  const title = privacy ? 'Política de Privacidade' : 'Termos de Uso'
  const sections = privacy ? privacySections : termsSections
  return <><Header legal /><main className="legal-main"><div className="container legal-layout"><aside className="legal-sidebar"><span className="section-index">THE EYE / DOCUMENTOS</span><h1>{title}<span className="brand-dot">.</span></h1><p>Aplicativo The Eye para Android</p><span className="legal-date">Atualizado em 1º de novembro de 2026</span><nav aria-label="Documentos legais"><a className={privacy ? 'active' : ''} href="/privacidade/">Política de Privacidade <span>↗</span></a><a className={!privacy ? 'active' : ''} href="/termos/">Termos de Uso <span>↗</span></a></nav></aside><article className="legal-article"><div className="legal-intro"><span className="legal-chip">{privacy ? 'SEUS DADOS' : 'USO RESPONSÁVEL'}</span><p>{privacy ? 'Esta página explica quais informações a versão atual do The Eye acessa, por que as usa e como elas são descartadas.' : 'Leia como o The Eye deve ser usado e quais conclusões os resultados permitem.'}</p></div>{sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.body}</section>)}<div className="legal-end">Ainda tem dúvidas? <Contact /></div></article></div></main><Footer /></>
}

const path = window.location.pathname.replace(/\/+$/, '')
createRoot(document.getElementById('root')).render(path === '/privacidade' ? <Legal kind="privacy" /> : path === '/termos' ? <Legal kind="terms" /> : <Home />)
