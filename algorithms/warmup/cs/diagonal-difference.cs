static int diagonalDifference(List<List<int>> arr)
{
    var length = arr.Count();
    int indexDiag1 = 0, indexDiag2 = length - 1;

    var diag1 = new List<int>();
    var diag2 = new List<int>();

    foreach (var list in arr)
    {
        diag1.Add(list.ElementAt(indexDiag1));
        diag2.Add(list.ElementAt(indexDiag2));

        indexDiag1++;
        indexDiag2--;
    }

    return Math.Abs(diag1.Sum() - diag2.Sum());
}
