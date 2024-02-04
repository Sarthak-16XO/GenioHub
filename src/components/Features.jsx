import { Fragment } from 'react';
import { keyFeatures } from '../data/index';
import { Fade } from 'react-awesome-reveal';

const KeyFeatures = () => {
    const { slogan, features } = keyFeatures;

    return (
        <div className='bg-slate-900 py-14 shadow-lg shadow-white p-4'>
            <div>
                <div className='flex flex-col items-center gap-5 mb-10'>
                    <h1 className='font-bold text-4xl text-white'>Why <span className="bg-gradient-to-r from-purple-500 via-orange-600 to-amber-400 bg-clip-text text-transparent">GenioHub</span></h1>
                    <p className='w-[90%] lg:w-[35rem] text-center text-lg text-slate-200' >{slogan}</p>
                </div>

                <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {features.map((item) => (
                        <Fade direction='up' triggerOnce delay={100 * item.id} key={`key-feature--key${item.id}`}>
                            <div className='flex flex-col items-center gap-6'>
                                <Fragment>
                                    <img className="h-[11rem] w-[12rem]" src={item.icon} alt={item.title} />
                                </Fragment>
                                <div className='flex flex-col gap-5 items-center'>
                                    <h1 className='text-center text-xl font-semibold text-slate-200'>{item.title}</h1>
                                    <p className='w-[80%] text-center text-base text-slate-400'>{item.description}</p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyFeatures;
