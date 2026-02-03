<script lang="ts">
	interface TeamMember {
		name: string;
		role: string[];
		bio: string;
		photoUrl: string;
		socialLinks: { platform: string; url: string }[];
	}

	const crewmates: TeamMember[] = [
		{
			name: 'Flowyan',
			role: ['Lead Developer', 'Owner'],
			bio: 'Flowyan is the lead developer and owner of BISMUTH.',
			photoUrl: '/team/flowyan.jpg',
			socialLinks: [
				{ platform: 'GitHub', url: 'https://github.com/flowyan' },
				{ platform: 'Twitter', url: 'https://x.com/flowyan_' },
				{ platform: 'Steam', url: 'https://steamcommunity.com/id/flowyan' }
			]
		},
		{
			name: 'Chutoy',
			role: ['Server Administrator', 'Developer'],
			bio: 'Chutoy is responsible for maintaining the servers and ensures they run smoothly and without issues.',
			photoUrl: '/team/chutoy.jpg',
			socialLinks: [
				{ platform: 'GitHub', url: 'https://github.com/chutoyjohn' },
				{ platform: 'Twitter', url: 'https://x.com/chutoyjohn' },
				{ platform: 'Steam', url: 'https://steamcommunity.com/id/chutoy22' }
			]
		}
	];
</script>

<div class="p-8 flex flex-col items-center gap-4">
	<h1>The Team</h1>
	<h2>
		The team, the group, the members, the collective, whatever you want to call us, here we are.
	</h2>

	<div class="team">
		{#each crewmates as member}
			<div class="teamMember">
				<img src={member.photoUrl} alt={member.name} class="photo" />
				<h3>{member.name}</h3>
				{#each member.role as role}
					<h4>{role}</h4>
				{/each}
				<p>{member.bio}</p>
				<div class="socialLinks">
					{#each member.socialLinks as link}
						<a href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	h1 {
		font-size: 3rem;
		color: var(--color-text);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
		font-weight: bold;
	}

	h2 {
		font-size: 1.5rem;
		color: var(--color-text);
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
		text-align: center;
		max-width: 800px;
	}

	h3 {
		font-size: 1.25rem;
		margin-top: 0.5rem;
		color: var(--color-text);
	}

	h4 {
		font-size: 1rem;
		color: var(--color-accent);
	}

	.team {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 2rem;
		margin-top: 2rem;
	}

	.teamMember {
		display: flex;
		flex-direction: column;
		background-color: var(--color-base-100);
		border-radius: 8px;
		padding: 1rem;
		width: 250px;
		text-align: center;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.photo {
		width: 100%;
		height: auto;
		border-radius: 8px;
		margin-bottom: 1rem;
	}

	.socialLinks {
		margin-top: auto;
		margin-bottom: 0;
		padding-top: 1rem;
	}

	.socialLinks a {
		margin: 0 0.5rem;
		color: var(--color-accent);
		text-decoration: none;
		font-weight: bold;
	}

	.socialLinks a:hover {
		text-decoration: underline;
	}
</style>
