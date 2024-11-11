import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '@/store/slices/menuSlice';
import { databaseService } from '@/supabase/services/database';

const useMenuItems = () => {
  const dispatch = useDispatch();
  const prefetchMenuItems = useSelector((state) => state.menu.items);
  useEffect(() => {
    if (prefetchMenuItems.length !== 0) return;
    const fetchMenuItems = async () => {
      try {
        const { data, error } = await databaseService.getMenuItems();

        if (error) {
          console.error('Error fetching menu items:', error);
          return;
        }
        console.log(data);
        
        dispatch(setMenu(data));
      } catch (err) {
        console.error('Unexpected error:', err);
      }
    };

    fetchMenuItems();
  }, [dispatch, prefetchMenuItems]);

};

export default useMenuItems;
