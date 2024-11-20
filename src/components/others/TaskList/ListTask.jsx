import React from 'react';
import AcceptTask from '../../TaskList/AcceptTask';
import NewTask from '../../TaskList/NewTask';
import CompleteTask from '../../TaskList/CompleteTask';
import FailedTask from '../../TaskList/FailedTask';

const ListTask = ({ data }) => {
    return (
        <div id="taskList" className="h-[60vh] overflow-x-auto w-full flex items-start justify-start gap-5 flex-nowrap py-5 mt-10">
            {data.tasks.map((elem ,idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />;
                } else if (elem.NewTask) {
                    return <NewTask key={idx} data={elem} />;
                } else if (elem.Completed) {
                    return <CompleteTask key={idx} data={elem} />;
                } else if (elem.Failed) {
                    return <FailedTask key={idx}  data={elem}/>;
                } 
                return null; // Return null if none of the conditions match
            })}
        </div>
    );
};

export default ListTask;
