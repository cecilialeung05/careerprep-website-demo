import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { lessons, categories, levels } from "../../data/lessons.js";
import { filterBySearchTerm } from "../../utils/fuzzySearch";
import './LessonPage.scss'

export default function LessonsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [filteredLessons, setFilteredLessons] = useState(lessons);

  useEffect(() => {
    let result = lessons;

    if (searchTerm) {
      result = filterBySearchTerm(result, searchTerm, ["title", "content"]);
    }

    if (selectedCategory) {
      result = result.filter((lesson) => lesson.category === selectedCategory);
    }

    if (selectedLevel) {
      result = result.filter((lesson) => lesson.level === selectedLevel);
    }

    setFilteredLessons(result);
  }, [searchTerm, selectedCategory, selectedLevel]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
  };

  const handleLevelClick = (level) => {
    setSelectedLevel(level === selectedLevel ? "" : level);
  };

  return (
    <div className="container">
      <div className="lessons__header">
        <h1 className="lessons__title">Free Lessons</h1>
        <p className="lessons__description">
          Free, accessible lessons to boost your skills and prepare for your data science career
        </p>
      </div>

      <div className="lessons__content">
        <div className="lessons__sidebar">
          <div className="lessons__search">
            <input
              type="text"
              placeholder="Search lessons..."
              className="lessons__search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="lessons__search-icon" size={18} />
          </div>

          {categories && (
            <div className="card lessons__categories">
              <h3>Categories</h3>
              <ul>
                {categories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => handleCategoryClick(category.name)}
                      className={selectedCategory === category.name ? "active" : ""}
                    >
                      {category.name} ({category.count})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {levels && (
            <div className="card lessons__levels">
              <h3>Skill Level</h3>
              <ul>
                {levels.map((level) => (
                  <li key={level.name}>
                    <button
                      onClick={() => handleLevelClick(level.name)}
                      className={selectedLevel === level.name ? "active" : ""}
                    >
                      {level.name} ({level.count})
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="lessons__grid">
          {filteredLessons.length > 0 ? (
            filteredLessons.map((lesson) => (
              <div key={lesson.id} className="card lesson-card">
                <img src={lesson.image || "/placeholder.svg"} alt={lesson.title} />
                <h3>{lesson.title}</h3>
                <div>
                  <span>{lesson.category}</span>
                  <span>{lesson.level}</span>
                  <span>{lesson.duration}</span>
                </div>
                <p>{lesson.content}</p>
                <Link to={`/lessons/${lesson.id}`} className="button button--primary">
                  Start Lesson
                </Link>
              </div>
            ))
          ) : (
            <div>No lessons found. Adjust your search or filters.</div>
          )}
        </div>
      </div>
    </div>
  );
}
