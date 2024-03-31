const Introduction = () => {
  return (
    <section className="bg-cover bg-no-repeat ">
      <div className="space-y-3">
        <div className="flex gap-2 font-sora text-2xl font-medium lg:text-3xl">
          <h1>
            你好呀, 我是 <strong>墨綠B.G.</strong>
          </h1>{' '}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <div className="space-y-4">
          <ul className="ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10">
            <li>
              來自 <strong>台灣桃園市</strong>
              <span className="ml-1">🇹🇼</span>
            </li>
            <li>在學 & 遠距接案工作</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
        一個具有豐富開發經驗的軟體工程師，擅長前端開發，同時也具備一定全端開發能力，致力於打造操作界面精美且富高交互性的網路體驗。<br/>
        我主要使用 <strong>JavaScript</strong> 作為第一開發語言，實現網站、桌面端、移動端與小程序等跨端開發。<br/>
        熱衷於與團隊協作，積極學習前沿技術，交付高效、可擴展且具有視覺吸引力的互聯網應用程式。
      </p>
    </section>
  );
};

export default Introduction;
