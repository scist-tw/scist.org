"use client";

import { useState, useEffect } from "react";

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

  const ActivityCard = ({ activity }) => {
    if (!activity) return null;
    const contentItems = Array.isArray(activity.content)
      ? activity.content
      : Object.values(activity.content || {});
    return (
      <div className="bg-white p-8 rounded-lg transition-all w-100">
        <h3 className="text-xl font-bold text-primary mb-2">
          {activity.title}
        </h3>
        {/* {activity.description && (
          <p className="text-foreground/70 mb-4">{activity.description}</p>
        )} */}
        {contentItems.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-foreground/80">
            {contentItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-foreground/50 italic">尚未提供內容</p>
        )}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-foreground text-sm">{activity.goal}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            課程內容
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="justify-center grid gap-8 sm:grid-cols-1 lg:grid-cols-2 justify-items-center">
          {activities.map((activity, idx) => (
            <ActivityCard key={idx} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
}
