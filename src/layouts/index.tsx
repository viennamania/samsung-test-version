//import dayjs from 'dayjs';
import {useRecoilValue} from 'recoil';
import {Outlet} from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

import Navbar from './Navbar';
import Footer from './Footer';
import ToastContainer from '../components/ToastContainer';
import {menuDrawerState} from '../atoms/menu';

//import {useSalePeriod} from '../contexts/SalePeriodProvider';

const Layout = () => {
  const isShowMenuDrawer = useRecoilValue(menuDrawerState);

  //const {setWhitelistDate, whitelistDate, publicDate, setPublicDate} = useSalePeriod();

  return (
    <Dialog.Root>
      <div className={`mx-auto flex h-full flex-col items-center`}>
        <Navbar />
        <div
          className={`mt-[64px] w-full flex-1 ${isShowMenuDrawer && 'blur-md'}`}>
          <ToastContainer />
          {/** 추후 삭제 */}

          {/*
          <div className="flex w-full flex-col items-center">

            <label>
              화이트리스트 테스트:{' '}
              <input
                className="rounded-xl border border-[#737780] bg-transparent px-2.5 py-1.5 text-white"
                type="datetime-local"
                value={dayjs(whitelistDate)
                  .utc(false)
                  .format('YYYY-MM-DDTHH:mm:ss')}
                onChange={(e) => {
                  const newDate = dayjs(e.target.value).utc(true).toISOString();

                  setWhitelistDate(newDate);
                }}
                step="1"
              />
            </label>
            <label>
              퍼블릭 테스트:{' '}
              <input
                className="rounded-xl border border-[#737780] bg-transparent px-2.5 py-1.5 text-white"
                type="datetime-local"
                value={dayjs(publicDate)
                  .utc(false)
                  .format('YYYY-MM-DDTHH:mm:ss')}
                onChange={(e) => {
                  const newDate = dayjs(e.target.value).utc(true).toISOString();

                  setPublicDate(newDate);
                }}
                step="1"
              />
            </label>
          </div>
          */}


          <Outlet />
        </div>
        <Footer />
      </div>
    </Dialog.Root>
  );
};

export default Layout;
