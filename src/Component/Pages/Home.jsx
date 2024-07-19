// import React from 'react';
import './Home.css';

const ProjectManagementBoard = () => {
  return (
    <div className="board">
      <div className="column backlog">
        <h2>Backlog</h2>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Performance improvements</div>
            <div className="category engineering">Engineering</div>
          </div>
          <div className="card-footer">
            <div className="task-info">
              <span>3</span> <span>2</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Implement new designs</div>
            <div className="category engineering">Engineering</div>
          </div>
          <div className="card-footer">
            <div className="task-info">
              <span>1</span> <span>5</span>
            </div>
          </div>
        </div>
      </div>

      <div className="column ready">
        <h2>Ready</h2>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Design navigation changes</div>
            <div className="category design">Design</div>
          </div>
          <div className="card-footer">
            <div className="task-info">
              <span>Jan 10</span> <span>4</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Design prototype</div>
            <div className="category design">Design</div>
          </div>
          <div className="card-footer">
            <div className="task-info">
              <span>Jan 16</span> <span>2</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Website redesign</div>
            <div className="category design">Design</div>
          </div>
          <div className="card-footer">
            <div className="task-info">
              <span>Dec 3</span> <span>3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="column in-progress">
        <h2>In Progress</h2>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Build social sharing functionality</div>
            <div className="category engineering">Engineering</div>
          </div>
          <div className="card-footer">
            <div className="task-info">
              <span>Friday</span> <span>4</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Redesign overview</div>
            <div className="category design">Design</div>
          </div>
          <div className="card-footer">
            <div className="task-info">
              <span>Nov 15</span> <span>1</span>
            </div>
          </div>
        </div>
      </div>

      <div className="column done">
        <h2>Done</h2>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Usability testing</div>
            <div className="category research">Research</div>
          </div>
          <div className="card-footer">
            <div className="task-info">
              <span>Sep 30</span> <span>4</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="card-title">Introduce new navigation</div>
            <div className="category data-science">Data Science</div>
          </div>
          <div className="card-footer">
            <div className="task-info">
              <span>Sep 23</span> <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementBoard;
