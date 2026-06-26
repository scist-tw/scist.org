"use client";

import { useState, useEffect, useRef } from "react";

export default function ActivitiesSection() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    fetch("/data/activities/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load activities.json");
        return res.json();
      })
      .then((data) => {
        if (active) {
          setActivities(Array.isArray(data) ? data : []);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const ActivityCard = ({ activity, index = 0 }) => {
    if (!activity) return null;
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const el = cardRef.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisible(entry.isIntersecting);
        },
        { threshold: 0.25 },
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);
    const contentItems = Array.isArray(activity.content)
      ? activity.content
      : Object.values(activity.content || {});
    const dir = index % 2 === 0 ? -1 : 1;
    const hiddenTransform = `perspective(900px) rotateX(10deg) rotateZ(${dir * 6}deg) translateX(${dir * 300}px)`;
    const visibleTransform = `perspective(900px) rotateX(0deg) rotateZ(0deg) translateX(0px)`;

    return (
      <div
        ref={cardRef}
        className={
          "relative overflow-hidden bg-(--background-temp) p-8 rounded-lg w-100 transition-all border-3 border-white/10 duration-700 ease-out will-change-transform"
        }
        style={{
          transform: visible ? visibleTransform : hiddenTransform,
          opacity: visible ? 1 : 0,
          transitionDelay: `${Math.min(index * 120, 480)}ms`,
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-white/20 via-white/5 to-transparent" />
        <h3 className="text-xl font-bold text-muted mb-2">{activity.title}</h3>
        {/* {activity.description && (
          <p className="text-foreground/70 mb-4">{activity.description}</p>
        )} */}
        {contentItems.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-muted">
            {contentItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted italic">尚未提供內容</p>
        )}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-muted text-sm">{activity.goal}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="activities" className="py-20 bg-(--background-temp)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4 text-balance">
              &lt;課程內容/&gt;
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          </div>
        </div>

        <div className="justify-center grid gap-8 sm:grid-cols-1 lg:grid-cols-2 justify-items-center">
          {activities.map((activity, idx) => (
            <ActivityCard key={idx} activity={activity} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
