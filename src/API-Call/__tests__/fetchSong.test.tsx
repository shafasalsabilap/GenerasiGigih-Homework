import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node'
import { rest } from 'msw';
import data from '../../Data/mocks/songData';
import { store } from '../../Data/store';
import SongCard from '../../components/trackscontainer';
import { Provider } from 'react-redux';

const server = setupServer(
    rest.get(`https://api.spotify.com/v1/search?q=test&type=track&access_token=accessToken`, (req, res, ctx) => {
        return res(ctx.json(data));
    }),
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should successfully fetch data and show the data for song', async () => {
    const { name, artists, Selected, uri, album, id } = data;
    render(<Provider store={store}>
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

    const testid = screen.queryByTestId(/id .*/i);
    await waitFor(() => {
        return expect(testid).toBeInTheDocument();
    });
})