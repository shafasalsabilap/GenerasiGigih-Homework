import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import data from '../../Data/mocks/songData';
import { store } from '../../Data/store';
import SongCard from '../trackscontainer';


test('Should show tracks component', () => {
    const { name, artists, Selected, uri, id, album } = data;
    const { container } = render(
        <Provider store={store}>
            <SongCard
                name={name}
                artists={artists}
                Selected={Selected}
                uri={uri}
                id={id}
                imgSrc={album.images[1].url}
                album={album.name}
                releasedate={album.release_date}
                handleSelect={() => {
                    Selected === false;
                }} />
        </Provider>);
    expect(container).toBeInTheDocument();

    const testid = screen.queryByTestId(/id .*/i);
    expect(testid).toBeInTheDocument();

}) 