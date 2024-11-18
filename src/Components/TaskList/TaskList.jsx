import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'


function TaskList({ data }) {
    return (
        <div id='tasklist' className='h-[48%]  pt-4  px-6 flex flex-nowrap gap-5 overflow-x-auto'>

            {data.tasks.map((elem,inx) => {
                if (elem.active) {
                    return <AcceptTask key={inx} data={elem}/>
                }
                if (elem.newTask) {
                    return <NewTask key={inx} data={elem}/>
                }
                if (elem.completed) {
                    return <CompleteTask key={inx} data={elem}/>
                }
                if (elem.failed) {
                    return <FailedTask key={inx} data={elem}/>
                }
              
            })}

        </div>
    )
}

export default TaskList
