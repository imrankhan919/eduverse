import React from 'react'

const Loader = () => {
    return (
        <div className="min-h-[75vh] p-8 flex items-center justify-center flex-col">
            <img className='h-18' src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUybHp3OHZyYzJ2ODFvbjR5cjEzMjIxc3FpZThuMDlieGY2bXB0dnpyeiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/VfK8uwEgsWawGtsSKO/giphy.gif" alt="" />
            <h1 className='text-center font-bold text-2xl text-gray-300'>Loading...</h1>
        </div>
    )
}

export default Loader
