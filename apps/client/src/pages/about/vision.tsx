import Layout from "@/components/layout";
import React from "react";
import { aboutInnerMenus } from "@/constants/innerMenus/about";

const AboutVisionPage = () => {
  return (
    <Layout
      pageTitle="로고와 비전"
      title="로고와 비전"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/introduce.jpeg"
      innerMenus={aboutInnerMenus}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold text-pink-100">명문교회</h3>
          <p>
            <span className="font-bold">名門(명문)교회는 대한예수교장로회(합동)에 속한 교회로써 ‘이름을 얻는다’</span>
            라는 의미로 이 문을들어오는 자마다 어린양의 생명책에 이름이기록되며, 아브람이 아브라함으로, 야곱이
            이스라엘로 새 이름을 얻어서 새로운 삶을 얻는교회라는의미를 가지고 있습니다
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold text-pink-100">목회비전</h3>
          <p>
            민족과 세계열방이 하나님께 예배드리는 날까지 인재를 양성하며 주님의 지상명령을 실천하는 것이 우리의
            비전입니다.가정과 교회와 이웃이 하나되어 가르치고 제자삼아세계선교에 앞장서가는 역할을 감당하고자 합니다.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold text-pink-100">로고의 의미</h3>
          <p>
            명문교회 기본로고는 명문의 첫 두글자 영문 MM을 형상화하여 만들어졌습니다. 성부,성자,성령을 의미하는 세 개의
            기둥으로 세워진 문을 통해 생명의 이름을 얻게 되는 명문교회 설립의도가 나타나 있습니다. 생명의 문은 열려진
            형태이며 누구든지 하나님의은혜앞에 나오는 사람은 생명의 이름을 얻고 구원의길을 가게 됩니다.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutVisionPage;
