import { useEffect, useRef } from 'react';
import { timeline } from '../data/timeline';

export function TimelineSection() {
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.remove('fade-in');
          entry.target.classList.add('fade-out');
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    eventRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    const eventRefsCurrent = eventRefs.current;

    return () => {
      eventRefsCurrent.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="TimelineSection">
      <h2>A walk through Pablo's life</h2>
      <div className="Timeline">
        {timeline.map((data, idx) => {
          const side = idx % 2 === 0 ? 'Left' : 'Right';
          return (
            <div
              key={idx}
              className={side}
              ref={(el) => {
                eventRefs.current[idx] = el;
              }}
            >
              <span className="Joint" />
              <div className="Content">
                <div className="Date">{data.date}</div>
                <div className="Text">
                  <div className="Title">
                    <strong>
                      <p>{data.title}</p>
                    </strong>
                  </div>
                  {data.location && (
                    <div className="Location">
                      {/* <data.flag title={data.location} /> */}
                      <i>{data.location}</i>
                    </div>
                  )}
                  <div className="Description">
                    {Array.isArray(data.text) &&
                    ![
                      'First Year at UC3M',
                      'Second Year at UC3M',
                      'Third Year at UC3M',
                      'Fourth Year at UC3M',
                      'UNSW',
                      'Software Engineer Intern at Ntt Data',
                      'Presented my Final Dissertation',
                      'Bussiness Intelligence Analyst Intern at TK Elevators',
                    ].includes(data.title) ? (
                      <ul>
                        {data.text.map((line, index) => (
                          <li key={index}>
                            <p>{line}</p>
                          </li>
                        ))}
                      </ul>
                    ) : Array.isArray(data.text) &&
                      data.title === 'First Year at UC3M' ? (
                      <>
                        <p>{data.text[0]}</p>
                        <ul>
                          {data.text.slice(1, -1).map((line, index) => (
                            <li key={index}>
                              <p>{line}</p>
                            </li>
                          ))}
                        </ul>
                        <p>{data.text[data.text.length - 1]}</p>
                      </>
                    ) : Array.isArray(data.text) &&
                      data.title === 'Second Year at UC3M' ? (
                      <>
                        <p>{data.text[0]}</p>
                        <ul>
                          {data.text.slice(1, -1).map((line, index) => (
                            <li key={index}>
                              <p>{line}</p>
                            </li>
                          ))}
                        </ul>
                        <p>{data.text[data.text.length - 1]}</p>
                      </>
                    ) : Array.isArray(data.text) &&
                      data.title === 'Third Year at UC3M' ? (
                      <>
                        <p>{data.text[0]}</p>
                        <ul>
                          {data.text.slice(1, -3).map((line, index) => (
                            <li key={index}>
                              <p>{line}</p>
                            </li>
                          ))}
                        </ul>
                        <p>{data.text[data.text.length - 3]}</p>
                        <p>{data.text[data.text.length - 2]}</p>
                        <p>{data.text[data.text.length - 1]}</p>
                      </>
                    ) : Array.isArray(data.text) &&
                      data.title === 'Fourth Year at UC3M' ? (
                      <>
                        <p>{data.text[0]}</p>
                        <ul>
                          {data.text.slice(1).map((line, index) => (
                            <li key={index}>
                              <p>{line}</p>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : Array.isArray(data.text) && data.title === 'UNSW' ? (
                      <>
                        <p>{data.text[0]}</p>
                        <ul>
                          {data.text.slice(1).map((line, index) => (
                            <li key={index}>
                              <p>{line}</p>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : Array.isArray(data.text) &&
                      data.title === 'Software Engineer Intern at Ntt Data' ? (
                      <>
                        <p>{data.text[0]}</p>
                        <ul>
                          {data.text.slice(1).map((line, index) => (
                            <li key={index}>
                              <p>{line}</p>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : Array.isArray(data.text) &&
                      data.title ===
                        'Bussiness Intelligence Analyst Intern at TK Elevators' ? (
                      <>
                        {data.text.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </>
                    ) : Array.isArray(data.text) &&
                      data.title === 'Presented my Final Dissertation' ? (
                      <>
                        {data.text.map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </>
                    ) : (
                      <p>{data.text}</p>
                    )}
                  </div>
                </div>
                {data.imageUrl && (
                  <div className="Image">
                    <img src={data.imageUrl} alt={data.title} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="SeparatorBig" />
        <div className="SeparatorSmall"></div>
      </div>
    </section>
  );
}
