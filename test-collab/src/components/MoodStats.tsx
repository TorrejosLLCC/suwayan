type MoodType = 'happy' | 'sad' | 'neutral';

interface MoodStatsProps {
    moodData: MoodType[];
}
export default function MoodStats({ moodData }: MoodStatsProps) {
    const totalMoods = moodData.length;
    const happyCount = moodData.filter(mood => mood === 'happy').length;
    const sadCount = moodData.filter(mood => mood === 'sad').length;
    const neutralCount = moodData.filter(mood => mood === 'neutral').length;
    
    return (
        <div>
        <h2>Mood Statistics</h2>
        <p>Total Moods Recorded: {totalMoods}</p>
        <p>Happy: {happyCount} ({((happyCount / totalMoods) * 100).toFixed(2)}%)</p>
        <p>Sad: {sadCount} ({((sadCount / totalMoods) * 100).toFixed(2)}%)</p>
        <p>Neutral: {neutralCount} ({((neutralCount / totalMoods) * 100).toFixed(2)}%)</p>
        </div>
    );
    }