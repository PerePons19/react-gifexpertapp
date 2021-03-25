import { GifGridItem } from "../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () => {
    test('Pruebas en <GifGridItem />', () => {
        const wrapper = shallow(<GifGridItem />)
        expect(wrapper).toMatchSnapshot();
    })
    
})
