<?php include("db_connect.php"); ?>


<!DOCTYPE html>
<html>
<head>
	<title>List Pendaftar Beasiswa | Scholarseek</title>
</head>

<body>
	<header>
		<h3>Siswa yang sudah mendaftar</h3>
	</header>

	<nav>
		<a href="registerMahasiswa.php">[+] Tambah Baru</a>
	</nav>

	<br>

	<table border="1">
	<thead>
		<tr>
			<th>Nama</th>
			<th>NIM</th>
			<th>IPK</th>
		</tr>
	</thead>
	<tbody>

		<?php
		$query = pg_query("SELECT * FROM mahasiswa");
		// $query = mysqli_query($db, $sql);


		while($mahasiswa = pg_fetch_array($query)){
			echo "<tr>";

			echo "<td>".$mahasiswa['Nama']."</td>";
			echo "<td>".$mahasiswa['NIM']."</td>";
			echo "<td>".$mahasiswa['IPK']."</td>";

			echo "<td>";
			echo "<a href='update_mahasiswa.php?id=".$mahasiswa['id']."'>Edit |</a>";
			echo "<a href='hapus.php?id=".$mahasiswa['id']."'> Hapus</a>";
			echo "</td>";

			echo "</tr>";

			}


		?>

	</tbody>
	</table>

	<p>Total: <?php echo pg_num_rows($query) ?></p>

	</body>
</html>