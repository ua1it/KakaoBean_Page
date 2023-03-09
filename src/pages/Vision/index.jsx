import React, { useState } from 'react';
// import './Vision.css';
import './style.jsx';

export default function Vision() {
  const vision_detail = [
    '새로운 기술과 소프트웨어 설계에 대한 역량을 향상시키고자 합니다. 현재 사용 중인 기술에 대한 이해도를 높이고, 새로운 기술에 대한 관심과 배움에 대한 열정을 갖습니다.',
    '다른 개발자들과의 소통과 협력을 통해 팀원 간의 신뢰와 소통 능력을 향상시킵니다. 뿐만아니라 팀 내에서 커뮤니케이션의 중요성을 깨닫고, 자신의 생각을 분명하게 전달하고 이해하기 쉽게 설명할 수 있는 능력을 강화하고자합니다.',
    '프로젝트에서 발생하는 문제를 해결하는 과정에서 문제 해결 능력을 향상시키고자 합니다. 프로젝트를 진행하면서 발생하는 문제에 대해 신속하게 대처하고, 문제를 해결하는 능력을 발전시킵니다.',
    '프로젝트를 성공적으로 완료하면, 새로운 경험과 지식을 얻을 수 있습니다. 이러한 경험과 지식은 다음 프로젝트에서 더 나은 성과를 얻을 수 있는 기반이 될 것이라 믿습니다.',
  ];

  const [vision, setVision] = useState(vision_detail[0]);

  return (
    <div>
      <article>
        <header>
          <h1>코드 작성으로 콩을 심고, 나무로 성장합니다</h1>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    setVision(vision_detail[0]);
                  }}
                >
                  기술적 성장
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setVision(vision_detail[1]);
                  }}
                >
                  협업능력 성장
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setVision(vision_detail[2]);
                  }}
                >
                  문제해결능력 성장
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setVision(vision_detail[3]);
                  }}
                >
                  경험과지식 성장
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <div>
          <section>
            {/* 나중에 이미지로 변경 */}
            <h3>기술적 성장</h3>
            <p>{vision}</p>
          </section>
        </div>
      </article>
    </div>
  );
}
