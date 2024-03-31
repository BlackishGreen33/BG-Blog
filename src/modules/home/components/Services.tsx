'use client';

import { useRouter } from 'next/navigation';
import { BiRocket as RocketIcon } from 'react-icons/bi';

import Button from '@/common/components/elements/Button';
import Card from '@/common/components/elements/Card';
import SectionHeading from '@/common/components/elements/SectionHeading';

const Services = () => {
  const router = useRouter();

  return (
    <section className="space-y-5">
      <div className="space-y-3">
        <SectionHeading title="一路走來我都做了些什麼？" />
        <p className="leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          我本科入學後在<strong>華中師範大學木犀團隊</strong>
          中學習互聯網開發技術，接手團隊項目和校園項目的開發維護，後續並持續迭代更新。
          <br />
          在校期間也通過所學技術積極參與挑戰杯、大創、互聯網+、計設等競賽的項目組，協助團隊完成項目開發，推動項目立項、培訓，並成功獲獎。
        </p>
      </div>
      <Card className="space-y-4 rounded-xl border bg-neutral-100 p-8 dark:border-none dark:bg-[#1e1e1e]">
        <div className="flex items-center gap-2">
          <RocketIcon size={24} />
          <h3 className="text-xl font-medium">讓我成為你的夥伴！</h3>
        </div>
        <p className="pl-2 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
          我開放接受自由職業項目，歡迎您透過電子郵件與我聯繫，共同討論合作事宜。
        </p>
        <Button
          data-umami-event="Click Contact Button"
          onClick={() => router.push('/contact')}
        >
          快來聯繫我吧😁
        </Button>
      </Card>
    </section>
  );
};

export default Services;
