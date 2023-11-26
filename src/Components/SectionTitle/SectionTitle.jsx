import './SectionTitle.css'

const SectionTitle = ({ heading }) => {
    return (
        <div className='flex flex-col mx-auto text-center  w-fit' style={{
            fontFamily: 'Inter'
        }}>
            <h2 className='border2 px-6 border-gray-300 py-5 my-16 text-3xl md:text-5xl font-extrabold text-[#05bcff] text-center'>&rdquo; {heading} &rdquo;</h2>
        </div >
    );
};

export default SectionTitle;