import React from 'react';

export default function Vision() {
  return (
    <div>
      <article>
        <header>
          <h1>코드 작성으로 콩을 심고, 나무로 성장합니다</h1>
          <nav>
            <ul>
              <li>
                <button>기술적 성장</button>
              </li>
              <li>
                <button>협업능력 성장</button>
              </li>
              <li>
                <button>문제해결능력 성장</button>
              </li>
              <li>
                <button>경험과지식 성장</button>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <section>
            {/* 나중에 이미지로 변경 */}
            <h3>기술적 성장</h3>
            <p>
              새로운 기술과 프로그래밍 언어를 배우면서 개발 역량을 향상시킨다.
              현재 사용 중인 기술에 대한 이해도를 높이고, 새로운 기술에 대한
              관심과 배움에 대한 열정을 가진다.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
