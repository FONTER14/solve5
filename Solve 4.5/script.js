document.getElementById('compareButton').addEventListener('click', function() {
    var code1 = document.getElementById('code1').value;
    var code2 = document.getElementById('code2').value;
    var lcsLength = lcs(code1, code2);
    var maxLength = Math.max(code1.length, code2.length);
    var result = (lcsLength / maxLength) * 100;
    document.getElementById('resultSection').innerHTML = '<p>Wynik porównania: ' + result.toFixed(2) + '%</p>';
    if (result > 80) {
        alert('Uwaga: Wysokie podobieństwo kodów! Możliwe ściągnięcie.');
    }
});

function lcs(str1, str2) {
    var m = str1.length, n = str2.length;
    var dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}
