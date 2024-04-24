import AboutTitle from "@/components/about/title";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";
import Image from "next/image";
import { Icon } from "ui";

interface IVision {
  description: string;
}

const AboutVisionPage = () => {
  const visionList: IVision[] = [
    { description: "성령의 임재와 말씀의 능력으로\n예배가 살아있는 교회" },
    { description: "지역사회를 품고 이웃을 섬기는 선교적 교회\n(다음세대와 가정 사역/신호가정과 3040 사역)" },
    { description: "복음으로 열방을 치유하는 교회\n(국내외 선교, 미자립교회 지원)" },
    { description: "다음세대 지도자와 일꾼을 세우는 교회\n(2,000명 예배자와 200개 구역/전도와 훈련)" },
    { description: "치유와 회복으로\n가정을 세우는 교회" },
  ];

  return (
    <Layout
      pageTitle="로고와 비전"
      title="로고와 비전"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/common/paint.jpg"
      innerMenus={aboutInnerMenus}
    >
      <AboutTitle title="명문교회 로고와 비전" />
      <div className="flex justify-center py-12">
        <div className="flex w-[760px] flex-col gap-10">
          <p className="text-2xl font-bold">
            <span className="text-blue-500">명문교회</span> 로고
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-14 bg-[#f8f8f8] py-20">
        <Icon name="LogoBlue" size="4xl" />
        <Icon name="LogoBlack" size="4xl" />
      </div>
      <div className="flex justify-center py-12">
        <div className="flex w-[760px] flex-col gap-10">
          <div className="flex flex-col gap-5 py-10 leading-8">
            <p>
              <span className="font-bold">名門(명문)교회는 대한예수교장로회(합동)에 속한 교회로써 ‘이름을 얻는다’</span>
              라는 의미로
              <br />이 문을들어오는 자마다 어린양의 생명책에 이름이 기록되며, 아브람이 아브라함으로,
              <br />
              야곱이 이스라엘로 새 이름을 얻어서 새로운 삶을 얻는 교회라는 의미를 가지고 있습니다.
            </p>
            <p>
              명문교회 기본 로고는 명문의 첫 두글자 영문 MM을 형상화하여 만들어졌습니다.
              <br />
              성부,성자,성령을 의미하는 세 개의 기둥으로 세워진 문을 통해
              <br />
              생명의 이름을 얻게 되는 명문교회 설립의도가 나타나 있습니다.
              <br />
              생명의 문은 열려진 형태이며 누구든지 하나님의 은혜 앞에
              <br />
              나오는 사람은 생명의 이름을 얻고 구원의길을 가게 됩니다.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <div className="flex w-[760px] flex-col gap-10">
          <p className="text-2xl font-bold">
            <span className="text-blue-500">명문교회</span> 목회비전
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-[#f8f8f8] py-12">
        <div className="w-[760px]">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm">명문교회 2024 핵심 가치와 비전</p>
            <h3 className="text-2xl font-bold text-blue-500">5대 비전(Vision)</h3>
          </div>
          <hr className="my-10 border-t-2 border-white" />
          <div className="mb-10 flex flex-col justify-center gap-10">
            {visionList.map((vision, idx) => (
              <div className="flex items-center justify-center gap-7" key={vision.description}>
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full">
                  <Image src={`/images/about/vision${idx + 1}.jpg`} alt="value" fill={true} className="object-cover" />
                </div>
                <p className="whitespace-pre">{vision.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutVisionPage;
