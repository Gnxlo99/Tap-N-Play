import { useParams, Link } from 'react-router-dom';
import { MOCK_GAMES } from '../constants';
import Icon from '../components/Icon';


const GamePage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
@@ -108,13 +109,15 @@ const GamePage: React.FC = () => {
                <h2 className="text-2xl font-bold text-white mb-4">How to Play</h2>
                <p className="text-gray-400 leading-relaxed">{game.instructions}</p>
            </div>
